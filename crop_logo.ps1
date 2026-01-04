
Add-Type -AssemblyName System.Drawing

$sourcePath = "$PSScriptRoot\src\assets\logo-final.png"
$destPath = "$PSScriptRoot\src\assets\logo-cropped.png"

Write-Host "Processing $sourcePath..."

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source file not found: $sourcePath"
    exit 1
}

try {
    $img = [System.Drawing.Image]::FromFile($sourcePath)
    
    # Calculate new height (crop bottom 15%)
    $cropPercent = 0.15
    $cropPixels = [int]($img.Height * $cropPercent)
    $newHeight = $img.Height - $cropPixels
    
    Write-Host "Original Size: $($img.Width) x $($img.Height)"
    Write-Host "New Size:      $($img.Width) x $newHeight"
    
    $rect = New-Object System.Drawing.Rectangle(0, 0, $img.Width, $newHeight)
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Draw the image onto the new bitmap, effectively cropping it
    $g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved cropped image to $destPath"
}
catch {
    Write-Error "An error occurred: $_"
}
finally {
    if ($img) { $img.Dispose() }
    if ($bmp) { $bmp.Dispose() }
    if ($g) { $g.Dispose() }
}
