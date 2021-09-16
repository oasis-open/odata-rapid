<# 
.SYNOPSIS
    Unit test for RSDL ABNF grammar

.DESCRIPTION
    This script extracts the RSDL ABNF from the markdown documentation, compiles it into a parser, and runs the parser on a set of test cases
#>

param (
    [switch]$watch = $false
)
 

function CompileAndCheck {
    if ((get-item "rsdl.abnf").LastWriteTime -lt (get-item "../../../docs/rsdl/rapid-rsdl-abnf.md").LastWriteTime ) {
        Write-Output "Extract ABNF..."
        node.exe lib/extract.js

        Write-Output "Generate parser..."
        node.exe node_modules/apg-js/bin/apg.sh --strict -i ./rsdl.abnf -o lib/grammar.js
    }

    node.exe lib/parse.js
}

CompileAndCheck

if ($watch) {
    $PathToMonitor = Resolve-Path "$pwd\..\..\.."

    $FileSystemWatcher = New-Object System.IO.FileSystemWatcher
    $FileSystemWatcher.Path = $PathToMonitor
    $FileSystemWatcher.IncludeSubdirectories = $true
    $FileSystemWatcher.NotifyFilter = [IO.NotifyFilters]::LastWrite
    $FileSystemWatcher.Filters.Add('*.md')
    $FileSystemWatcher.Filters.Add('*.yaml')
    
    Write-Host "Monitoring content of $PathToMonitor"
    
    while ($true) {
        $Change = $FileSystemWatcher.WaitForChanged('All', 1000)
        if ($Change.TimedOut -eq $false) {
            CompileAndCheck
        }
    }
}
