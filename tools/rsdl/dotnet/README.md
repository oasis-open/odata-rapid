# demo

To build and run the demo program with VS Code please install
- [.NET Core SDK for Visual Studio Code](https://dotnet.microsoft.com/download/dotnet-core/sdk-for-vs-code?utm_source=vs-code&amp;utm_medium=referral&amp;utm_campaign=sdk-install)
- [C# for Visual Studio Code (powered by OmniSharp)](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

The demo program can be run from this folder with

```sh
cd demo
dotnet run -- --input jetsons.rsdl --format JSON
dotnet run -- --input jetsons.rsdl --format XML
dotnet run -- --input jetsons.rsdl # defaults to XML
```
