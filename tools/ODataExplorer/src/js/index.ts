import {initUrlEditor, schemaFormat} from 'odata-url-editor';

const editor = document.getElementById("editor");
const urlEditor = initUrlEditor(editor, (e) => {});
const serviceUrlControl = document.getElementById("serviceUri")
const sendButton = document.getElementById("send-button");
const resultView = document.getElementById("results");

initialize();

function getServiceUrl()
{
    const serviceUrlControl = document.getElementById("serviceUri")
    const serviceUrl = (serviceUrlControl as HTMLTextAreaElement).value;
    if(!serviceUrl.endsWith("/"))
    {
        return serviceUrl + "/";
    }

    return serviceUrl;
}

function initialize()
{
    var serviceUrl = getServiceUrl();
    updateServiceUrl(serviceUrl);

    serviceUrlControl.addEventListener('change', async () => {
        updateServiceUrl(getServiceUrl());
    });

    sendButton.addEventListener('click', async () => {
            fetch(getServiceUrl() + urlEditor.getUrl())
            .then((response) => response.text()
            .then((responseText)=>
            {
                // TODO handle error responses
                try {
                    const parsed = JSON.parse(responseText);
                    const pretty = JSON.stringify(parsed, null, 2);
                    responseText = pretty;
                }
                catch { }

                resultView.innerHTML = responseText;
            }
        ))
    });
}

function updateServiceUrl(serviceUrl: string)
{
    const metadataUrl = serviceUrl + "$metadata?$format=application/json";
    
    urlEditor.setUrl("");
    resultView.innerHTML="";

    fetch(metadataUrl)
        .then((response) => response.text()
        .then((text) => 
       {
           // todo: handle errors
           const contentType = response.headers.get("Content-Type");
           if(contentType.includes("xml"))
           {
                urlEditor.updateSchema(text, schemaFormat.xmlCsdl);
           }
           else
           {
               urlEditor.updateSchema(text, schemaFormat.jsonCsdl);
           }
       }));
}