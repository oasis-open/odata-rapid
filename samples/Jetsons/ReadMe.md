# Jetsons Sample Service

The code in this directory implements a simple sample RAPID service based on the popular 60's tv show The Jetsons.

The sample service is implemented using the [RESTier](https://github.com/OData/RESTier/blob/master/README.md) OData framework.

There are three project directories:
1) Microsoft.Restier.Providers.InMemory -- Provides common utilities for registering per-session or global services
2) Jetsons -- this is the main read-only service hosted on Azure
3) JetsonsRW -- this is a read-write version of the Jetsons service that creates a sandbox in which the user can experiment with making updates to the data through POST/PATCH/DELETE operations.

## Publish Sample Service To RAPID.ROCKS
To Publish the service to RAPID.ROCKs, right-click the Jetsons project and select "Publish".  The password for the `$Jetsons` account can be found by viewing the Jetsons project in the Azure portal. Select Deployment Center in the left hand panel and click on FTPS credentials.