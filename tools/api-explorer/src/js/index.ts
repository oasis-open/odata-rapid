import "bootstrap/dist/css/bootstrap.css";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import "highlight.js/styles/default.css";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "../css/main.scss";
import { MermaidEditor } from "visual-model-editor";
import { initUrlEditor, schemaFormat } from "odata-url-editor";
import { xml2json } from "odata-csdl";
import { csdl2openapi } from "odata-openapi/lib/csdl2openapi";

const editor = document.getElementById("editor");
const urlEditor = initUrlEditor(editor, (e) => {});
const serviceUrlControl = document.getElementById("serviceUri");
const sendButton = document.getElementById("send-request-button");
const resultView = document.getElementById("results");
const swaggerUiNode = document.getElementById("swagger-ui-desc");
const csdlTabContent = document.getElementById("csdl-desc");
const openApiTabContent = document.getElementById("open-api-desc");
const mermaidEditor = new MermaidEditor(
  document.getElementById("visual-editor-gui-content"),
  window,
  (rsdl: string) => {}
);

hljs.registerLanguage("json", json);

initialize();

function initialize() {
  // Initialize Get Schema Button
  var serviceUrl = getServiceUrl();
  updateServiceUrl(serviceUrl);
  serviceUrlControl.addEventListener("change", async () => {
    updateServiceUrl(getServiceUrl());
  });

  // Initialize Send Query Button
  sendButton.addEventListener("click", async () => {
    fetch(getServiceUrl() + urlEditor.getUrl()).then((response) => {
      response.text().then((responseText) => {
        if (responseText) {
          // Write results to result element
          populateQueryResults(responseText);
        } else {
          resultView.innerHTML =
            "Error " + response.status + " " + response.statusText;
        }
      });
    });
  });

  function populateQueryResults(results: string) {
    try {
      const parsed = JSON.parse(results);
      const pretty = JSON.stringify(parsed, null, 2);
      resultView.innerHTML = pretty;
      hljs.highlightAll();
    } catch {
      resultView.innerText = results;
    }
  }

  // Export Schema
  const dropdown = document.getElementById("export-dropdown");

  const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  dropdown.addEventListener("click", (event) => {
    const format = (event.target as HTMLElement).innerText;
    let extension = "json";
    let text;
    let filename;
    switch (format) {
      case "CSDL":
        text = csdlTabContent.innerText;
        filename = `rsdl-csdl.${extension}`;
        break;
      case "Open API":
        text = openApiTabContent.innerText;
        filename = `rsdl-openapi3.${extension}`;
        break;
    }

    downloadToFile(text, filename, "application/json");
  });
}

function getServiceUrl() {
  const serviceUrl = (serviceUrlControl as HTMLTextAreaElement).value;
  if (!serviceUrl.endsWith("/")) {
    return serviceUrl + "/";
  }

  return serviceUrl;
}

function updateServiceUrl(serviceUrl: string) {
  const metadataUrl =
    serviceUrl +
    "$metadata?$format=application/json;q=0.8,application/xml;q=0.5";

  // Clear UrlEditor and resultsView
  urlEditor.setUrl("");
  resultView.innerHTML = "";

  fetch(metadataUrl).then((response) =>
    response.text().then((text) => {
      // get schema from service
      try {
        const contentType = response.headers.get("Content-Type");
        if (contentType.includes("xml")) {
          text = JSON.stringify(xml2json(text), null, 2);
        }

        updateSchema(serviceUrl, text);
      } catch (errorMessage) {
        onSchemaError(serviceUrl, errorMessage);
      }
    })
  );
}

function onSchemaError(serviceUrl: string, errorText: string) {
  // write error to CSDL tab
  csdlTabContent.innerText = errorText;

  // clear other schemas
  var nullSchema = JSON.stringify({});
  urlEditor.updateSchema(nullSchema, schemaFormat.jsonCsdl);
  mermaidEditor.updateCsdl(nullSchema);
  mermaidEditor.redraw();
  updateSwaggerUi(serviceUrl, nullSchema);
}

function updateSchema(serviceUrl: string, schema: string) {
  // Update UrlEditor
  urlEditor.updateSchema(schema, schemaFormat.jsonCsdl);

  // Update CSDL Pane
  csdlTabContent.innerHTML = schema;

  // Update Visual Editor
  mermaidEditor.updateCsdl(schema);
  mermaidEditor.redraw();

  // Update SwaggerUI
  updateSwaggerUi(serviceUrl, schema);

  hljs.highlightAll();
}

function updateSwaggerUi(serviceUrl: string, schema: any) {
  var jsonSchema = JSON.parse(schema);
  var parsedUrl = parseUrl(serviceUrl);
  var openapi = csdl2openapi(jsonSchema, {
    basePath: parsedUrl.basePath,
    host: parsedUrl.host,
    scheme: parsedUrl.scheme,
  });

  SwaggerUI({
    domNode: swaggerUiNode,
    spec: openapi,
  });
}

function parseUrl(url: string) {
  var iColon = url.indexOf(":");
  var hostStart = url.indexOf("//") + 2;
  var baseStart = url.indexOf("/", hostStart);

  return {
    scheme: url.substring(0, iColon),
    host: url.substring(hostStart, baseStart),
    basePath: url.substring(baseStart),
  };
}
