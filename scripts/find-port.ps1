param(
  [int]$Port = 5000
)

$conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($null -eq $conn) {
  Write-Output "NONE"
} else {
  Write-Output $conn.OwningProcess
}
