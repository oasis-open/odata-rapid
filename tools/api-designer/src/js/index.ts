import "bootstrap/dist/css/bootstrap.css";
import "swagger-ui/dist/swagger-ui.css";
import "highlight.js/styles/default.css";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "../css/main.scss";
import { initRsdlEditor } from "rsdl-editor";
import { MermaidEditor } from "visual-model-editor";
import { schemaFormat, initUrlEditor } from "odata-url-editor";
import { App, Listener } from "./app";
import { initViewers } from "./viewers";

hljs.registerLanguage("json", json);

document.addEventListener("DOMContentLoaded", function (event) {
  // `app` is used for state management and messaging between the different components
  // this was a quick hack, not the best solution
  const app = new App();

  const rsdlEditor = initRsdlEditor(
    document.getElementById("editor"),
    (rsdl) => {
      app.publishRsdl("main", rsdl);
    }
  );
  app.addListener(
    new Listener("main", (rsdl) => rsdlEditor.updateContent(rsdl))
  );

  const urlEditor = initUrlEditor(
    document.getElementById("uri-editor"),
    () => {}
  );
  app.addListener(
    new Listener("urlEditor", (rsdl) =>
      urlEditor.updateSchema(rsdl, schemaFormat.rsdl)
    )
  );

  const mermaidEditor = new MermaidEditor(
    document.getElementById("rsdl-editor-gui-content"),
    window,
    (rsdl: string) => app.publishRsdl("visualEditor", rsdl)
  );

  document
    .getElementById("rsdl-editor-gui-tab")
    .addEventListener("shown.bs.tab", () => mermaidEditor.redraw());

  app.addListener(
    new Listener("visualEditor", (rsdl: string) =>
      mermaidEditor.updateRsdl(rsdl)
    )
  );

  const viewerListener = initViewers(app, "", "");

  const currentRsdl = rsdlEditor.getContent();
  const config = {
    swaggerUiId: "#swagger-ui-desc",
    csdlTabContent: document.getElementById("csdl-desc"),
    openApiTabContent: document.getElementById("open-api-desc"),
  };
  viewerListener.configure(config);

  app.publishRsdl("main", currentRsdl);
  hljs.highlightAll();

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
      case "RSDL":
        text = rsdlEditor.getContent();
        extension = "rsdl";
        filename = `rsdl-definitions.${extension}`;
        break;
      case "CSDL":
        text = config.csdlTabContent.innerText;
        filename = `rsdl-csdl.${extension}`;
        break;
      case "Open API":
        text = config.openApiTabContent.innerText;
        filename = `rsdl-openapi3.${extension}`;
        break;
    }

    downloadToFile(text, filename, "application/json");
  });
});
