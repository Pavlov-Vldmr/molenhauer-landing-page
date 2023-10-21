# .\layout-creator.ps1 -layouts test, top

param([String[]] $layouts)

$path = ".\scss\layout\"
$file_index = 'index.scss'
$file_media = '-media.scss'
$ext = '.scss'
$mainIndex = @()

New-Item -Path $path -ItemType Directory
foreach ($item in $layouts)
{   
    $indexContent = " @import './"+ $item +".scss';" ,"`n",
                   "@import './"+ $item + $file_media +"';"
    $index = $path + $item + '\' + $file_index
    $media = $path + $item + '\' + $item + $file_media
    $main  = $path + $item + '\' + $item + $ext
    New-Item -Path ($path + $item) -ItemType Directory
    New-Item  -Force -Path $index -ItemType File
    New-Item -Path $media -ItemType File
    New-Item -Path  $main  -ItemType File
    Add-Content -Path  $index -Value ($indexContent.ToString())
    $mainIndex += "@import './layout/$item/';"
}

cls
Write-Host $mainIndex -Separator `n -ForegroundColor Yellow 

Set-Clipboard -Value $mainIndex
Write-Host ""
Write-Host "Copied to clipboard, paste it in " -NoNewline -ForegroundColor Green; 
Write-Host "'./scss/index/scss'" -ForegroundColor DarkMagenta


