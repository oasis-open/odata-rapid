import "bootstrap/dist/css/bootstrap.css";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import "highlight.js/styles/default.css";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import "../css/main.scss";
import { MermaidEditor } from "visual-model-editor";
import { initUrlEditor, schemaFormat } from "odata-url-editor";
import { xml2json } from "odata-csdl";
import { serializeToXml } from "csdl2xml";
import { csdl2openapi } from "odata-openapi/lib/csdl2openapi";

const editor = document.getElementById("editor");
const urlEditor = initUrlEditor(editor, (e) => {});
const serviceUrlControl = document.getElementById("serviceUri");
const sendButton = document.getElementById("send-request-button");
const resultView = document.getElementById("results");
const swaggerUiNode = document.getElementById("swagger-ui-desc");
const csdlTabContent = document.getElementById("csdl-desc");
const csdlXmlTabContent = document.getElementById("csdl-xml-desc");
const openApiTabContent = document.getElementById("open-api-desc");

const mermaidEditor = new MermaidEditor(
  document.getElementById("visual-editor-gui-content"),
  window,
  (rsdl: string) => {}
);

hljs.registerLanguage("json", json);
hljs.registerLanguage("xml", xml);

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

  const downloadToFile = (
    content: string,
    filename: string,
    contentType: string
  ) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  dropdown.addEventListener("click", (event) => {
    const format = (event.target as HTMLElement).innerText;
    switch (format) {
      case "JSON":
        downloadToFile(
          csdlTabContent.innerText,
          `csdl.json`,
          "application/json"
        );
        break;
      case "XML":
        downloadToFile(
          csdlXmlTabContent.innerText,
          `csdl.xml`,
          "application/xml"
        );
        break;
      case "Open API":
        const serviceUri = getServiceUrl();
        const uri = new URL(serviceUri);
        const openApi = csdl2openapi(JSON.parse(csdlTabContent.innerText), {
          basePath: uri.pathname,
          host: uri.host,
          scheme: uri.protocol,
        });
        downloadToFile(
          JSON.stringify(openApi, null, 2),
          `openapi3.json`,
          "application/json"
        );
        break;
    }
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
        let format = schemaFormat.jsonCsdl;
        if (contentType.includes("xml")) {
          format = schemaFormat.xmlCsdl;
        }

        updateSchema(serviceUrl, text, format);
      } catch (errorMessage) {
        onSchemaError(serviceUrl, errorMessage as string);
      }
    })
  );
}

function onSchemaError(serviceUrl: string, errorText: string) {
  // write error to CSDL and CSDL-XML tabs
  csdlTabContent.innerText = errorText;
  csdlXmlTabContent.innerText = errorText;

  // clear other schemas
  var nullSchema = JSON.stringify({});
  urlEditor.updateSchema(nullSchema, schemaFormat.jsonCsdl);
  //mermaidEditor.updateCsdl(nullSchema);
  //mermaidEditor.redraw();
  updateSwaggerUi(serviceUrl, nullSchema);
}

function updateSchema(serviceUrl: string, csdl: string, format: schemaFormat) {
  let csdlJson: string, csdlXml: string;

  // Update UrlEditor
  urlEditor.updateSchema(csdl, format);

  if (format == schemaFormat.jsonCsdl) {
    csdlJson = csdl;
    csdlXml = convert2csdlxml(csdlJson);
  } else {
    csdlXml = csdl;
    csdlJson = JSON.stringify(xml2json(csdlXml), null, 2);
  }

  // Update CSDL Pane
  csdlTabContent.innerHTML = csdlJson;

  // Update CSDL-XML Pane
  csdlXmlTabContent.innerHTML = csdlXml
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Update Visual Editor
  //mermaidEditor.updateCsdl(csdlJson);
  //mermaidEditor.redraw();

  // Update SwaggerUI
  updateSwaggerUi(serviceUrl, csdlJson);

  hljs.highlightAll();
}

function convert2csdlxml(csdl: string): string {
  try {
    return serializeToXml(JSON.parse(csdl));
  } catch (e) {
    console.error(e);
    return e as string;
  }
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
