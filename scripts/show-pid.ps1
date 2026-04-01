param(
  [int]$ProcessId = 10024
)

try {
  Get-Process -Id $ProcessId | Select-Object Id,ProcessName,Path | Format-List
} catch {
  Write-Output "MISSING"
}
