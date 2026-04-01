param(
  [int]$ProcessId = 10024
)

try {
  Stop-Process -Id $ProcessId -Force -ErrorAction Stop
  Start-Sleep -Seconds 1
  if (Get-Process -Id $ProcessId -ErrorAction SilentlyContinue) {
    Write-Output "STILL_RUNNING"
  } else {
    Write-Output "STOPPED"
  }
} catch {
  Write-Output "MISSING"
}
