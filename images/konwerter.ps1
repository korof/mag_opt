Set-ExecutionPolicy RemoteSigned
$pliki = Get-ChildItem -Path "C:\Users\Krzysiek\Documents\STUDIA\magisterskie\praca\www\kraken-a556cd1c65"
foreach ($p in $pliki) {
cwebp $p -o $p.BaseName
}