# Jetsons Sample Service

The code in this directory implements a simple sample RAPID service based on the popular 60's tv show The Jetsons.

The sample service is implemented using the [RESTier](https://github.com/OData/RESTier/blob/master/README.md) OData framework.

There are three project directories:

1. Microsoft.Restier.Providers.InMemory -- Provides common utilities for registering per-session or global services
2. Jetsons -- this is the main read-only service hosted on Azure
3. JetsonsRW -- this is a read-write version of the Jetsons service that creates a sandbox in which the user can experiment with making updates to the data through POST/PATCH/DELETE operations.

## Building the Sample Service from the command line

The Sample Service can be built from the command line by downloading the latest [.NET 7.x SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) and running the following command:

```
dotnet build C:\Repos\Rapid\odata-rapid-jetsons\samples\Jetsons/JetsonsReadWrite/JetsonsReadWrite.csproj.
```

## Building and Debugging in Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) is recommended for building and running the Sample Service locally.

To Install and Set-up Visual Studio Code:

1. Download the latest [.NET 7.x SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
2. Download and launch [Visual Studio Code](https://code.visualstudio.com/)
3. To install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp):

   a. Select `Extensions` from the `View` menu

   b. enter "C#" in the search box and click `Install` for the C# for Visual Studio Code (powered by OmniSharp)

To Open and Build the Jetsons Sample Service:

4. Go to the `File` menu and select `Open Folder` to open this folder.
5. Select `Run Build Task...` from the `Terminal` menu.

To Run the Jetsons Sample Service locally:

5. Select `Start Debugging` from the `Run` menu.

## Publish Sample Service To RAPID.ROCKS

To Publish the service to RAPID.ROCKs from Visual Studio Code:

1. Download and install the [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) extension for Visual Studio Code

2. Wait for the extension to finish installing then reload Visual Studio Code when prompted

3. Select the Azure activity from the Activity Bar.

   a. If your activity bar is hidden, click View > Appearance > Show Activity Bar

   b. You may have to click the ellipses (`...`) to see additional activities

4. Sign in to your Azure Account by clicking `Sign in to Azure…`

5. Expand `App Services`, right-click `Jetsons`, and select `Deploy to Web App...`

To publish the Jetsons Sample Service using Visual Studio:

1. Right-click the Jetsons project and select "Publish".
2. In the `Web Publish Activity` tab at the bottom, select "Jetsons - Web Deploy" and click the blue globe icon.

Note: The password for the `$Jetsons` account can be found by viewing the Jetsons project in the Azure portal. Select Deployment Center in the left hand panel and click on FTPS credentials.
