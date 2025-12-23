Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $currentDir

# Check if Node.js is available
if (Get-Command node -ErrorAction SilentlyContinue) {
    node server.js
} else {
    Write-Host "Node.js is not installed. Please install Node.js." -ForegroundColor Red
    Write-Host "Alternatively, you can use Live Server extension in VS Code." -ForegroundColor Yellow
    pause
}

