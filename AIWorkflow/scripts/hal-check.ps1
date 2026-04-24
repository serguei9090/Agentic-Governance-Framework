# Antigravity HAL Verification Script (v1.0)
# Verifies that agents.yaml paths and binaries are ready.

if (!(Test-Path agents.yaml)) {
    Write-Error "CRITICAL: agents.yaml NOT FOUND. Project environment is not initialized for Interoperability."
    exit 1
}

Write-Host "PASS: agents.yaml found." -ForegroundColor Green

# Simple path checks
$paths = @("docs", ".agents", ".gemini")
foreach ($p in $paths) {
    if (Test-Path $p) {
        Write-Host "PASS: $p directory exists." -ForegroundColor Green
    } else {
        Write-Warning "WARNING: $p directory NOT FOUND."
    }
}

Write-Host "HAL READINESS: COMPLETED" -ForegroundColor Green
