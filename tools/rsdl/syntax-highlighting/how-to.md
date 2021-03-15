# Install extension locally

```ps1
Copy-Item -Path . -Destination #env:userprofile\.vscode\extensions\oasis-open.rsdl-0.0.1 -Recurse -force
```

# Package VSIX

Once: install packaging tool:

```sh
npm install -g vsce
```

Then in this folder:

```sh
vsce package
```

# Install from VSIX

- Switch to Extensions view
- Click on `...` (Views and More Actions...)
- Select menu item "Install from VSIX..."
- Select file `rsdl-i.j.k.vsix`, click `Install`

# Sources

- https://macromates.com/manual/en/regular_expressions
- https://www.apeth.com/nonblog/stories/textmatebundle.html
- https://github.com/microsoft/vscode-textmate/blob/main/test-cases/themes/syntaxes/JavaScript.tmLanguage.json
- https://benparizek.com/notebook/notes-on-how-to-create-a-language-grammar-and-custom-theme-for-a-textmate-bundle
- https://www.regular-expressions.info/index.html
