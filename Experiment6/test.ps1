$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
foreach ($file in @('6a.js','6b.js','6c.js','6d.js','6e.js')) {
  node --check $file
  if ($LASTEXITCODE -ne 0) { throw "Syntax failed: $file" }
}
$tests = @(
  @{ file='6a.js'; paths=@('/'); expected=@('Hello World') },
  @{ file='6b.js'; paths=@('/','/about','/contact'); expected=@('Welcome to Home Page','About Us Page','Contact Us Page') },
  @{ file='6c.js'; paths=@('/'); expected=@('Check Terminal for Output') }
)
foreach ($test in $tests) {
  $process = Start-Process node -ArgumentList ('"' + (Join-Path $PSScriptRoot $test.file) + '"') -PassThru -NoNewWindow
  try {
    Start-Sleep -Milliseconds 700
    for ($i=0; $i -lt $test.paths.Count; $i++) {
      $response = (Invoke-WebRequest -Uri ('http://localhost:3000' + $test.paths[$i]) -UseBasicParsing).Content
      if ($response -ne $test.expected[$i]) { throw "Unexpected response: $response" }
      Write-Output "$($test.file) $($test.paths[$i]): $response"
    }
  } finally {
    Stop-Process -Id $process.Id -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 350
  }
}
$process = Start-Process node -ArgumentList ('"' + (Join-Path $PSScriptRoot '6d.js') + '"') -PassThru -NoNewWindow
try {
  Start-Sleep -Milliseconds 700
  $url = 'http://localhost:3000/students'
  $initial = Invoke-RestMethod $url
  if ($initial.Count -ne 2 -or $initial[0].name -ne 'Ganesh') { throw 'GET failed' }
  $created = Invoke-RestMethod $url -Method Post -ContentType 'application/json' -Body '{"id":3,"name":"Priya"}'
  if ($created.Count -ne 3) { throw 'POST failed' }
  $updated = Invoke-RestMethod "$url/3" -Method Put -ContentType 'application/json' -Body '{"name":"Divya"}'
  if ($updated.name -ne 'Divya') { throw 'PUT failed' }
  $deleted = Invoke-RestMethod "$url/3" -Method Delete
  if ($deleted.message -ne 'Student Deleted' -or (Invoke-RestMethod $url).Count -ne 2) { throw 'DELETE failed' }
  Write-Output '6d GET, POST, PUT, DELETE: passed'
} finally {
  Stop-Process -Id $process.Id -ErrorAction SilentlyContinue
}
