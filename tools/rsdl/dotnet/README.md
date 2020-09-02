# rapid cli

To build and run the rapid cli program with VS Code please install

- [.NET Core SDK for Visual Studio Code](https://dotnet.microsoft.com/download/dotnet-core/sdk-for-vs-code?utm_source=vs-code&amp;utm_medium=referral&amp;utm_campaign=sdk-install)
- [C# for Visual Studio Code (powered by OmniSharp)](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

The rapid cli program can be run from this folder with

```sh
cd rapid
dotnet run -- --input sample.rsdl --format JSON
dotnet run -- --input sample.rsdl --format XML
dotnet run -- --input sample.rsdl 
```

A self contained binary can be generated via

```sh
dotnet publish --configuration release --self-contained true --runtime win10-x64 -p:PublishSingleFile=true
dotnet publish --configuration release --self-contained true --runtime osx.10.11-x64 -p:PublishSingleFile=true
```

this creates folders
    bin\Debug\netcoreapp3.1\win10-x64 
    bin\Debug\netcoreapp3.1\osx.10.11-x64
with a binary image that any machine and run via the `rapid` or `rapid.exe` command.

See [docs](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish) and [publish a single exe](
https://dotnetcoretutorials.com/2019/06/20/publishing-a-single-exe-file-in-net-core-3-0/) for more details
