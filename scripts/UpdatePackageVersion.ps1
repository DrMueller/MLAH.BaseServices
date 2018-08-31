param (
  [string]$buildVersion
)

function getPackageFiles() {
  $packageFiles = New-Object System.Collections.Generic.List[System.IO.FileInfo]

  Write-Host 'I am here: ' $PSScriptRoot

  # $mainPackage = Get-ChildItem -File ($PSScriptRoot + '/../*package.json')
  # $packageFiles.Add($mainPackage)

  $libPackages = Get-ChildItem -File ($PSScriptRoot + '/../projects/package.json') -Recurse -Force

  foreach ($libPackage in $libPackages) {
    $packageFiles.Add($libPackage)
  }

  return $packageFiles
}

# ------------ Core Start
function getModuleFile([string]$fileName, [string]$subPath = "Common") {
  $filePath = $PSScriptRoot
  $filePath = Split-Path -Path $filePath -Parent
  $fileName = $($filePath + "/" + $subPath + "/" + $fileName + ".psm1")
  return $fileName
}

function loadModules() {
  Import-Module $($PSScriptRoot + "/Utils.psm1") -Force -Verbose
}
# ------------ Core End

loadModules

$packageFiles = getPackageFiles

foreach ($packageFile in $packageFiles) {
  Write-Host 'Updating' $packageFile
  $directoryName = [System.IO.Path]::GetDirectoryName($packageFiles);
  Write-Host 'Directory' $$directoryName
  Set-Location $directoryName

  # The git commands are needed, since version can only be updated on a clean git repo --> https://github.com/npm/npm/issues/6879
  git add .
  git commit -am 'auto'

  npm version $buildVersion

  # $packageContent = Get-Content $packageFile
  # $replaced = $packageContent -replace '"version": "0.0.1"', $newVersionString
  # Set-Content -Path $packageFile -value $replaced
}