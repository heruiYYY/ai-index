# 仅用于本地预览 index.html（http://localhost:8765/），日常使用不需要
param([string]$Root = 'H:\AI_Index', [int]$Port = 8765)
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "serving $Root on $Port"
$types = @{ '.html' = 'text/html; charset=utf-8'; '.js' = 'application/javascript; charset=utf-8'; '.md' = 'text/plain; charset=utf-8' }
while ($l.IsListening) {
  $c = $l.GetContext()
  $rel = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/'))
  if (-not $rel) { $rel = 'index.html' }
  $p = Join-Path $Root $rel
  if (Test-Path $p -PathType Leaf) {
    $b = [IO.File]::ReadAllBytes($p)
    $ct = $types[[IO.Path]::GetExtension($p)]; if ($ct) { $c.Response.ContentType = $ct }
    $c.Response.OutputStream.Write($b, 0, $b.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}
