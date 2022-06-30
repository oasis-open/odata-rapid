import SwaggerUI from "swagger-ui";
import { App, Listener } from "./app";
import { csdl2openapi } from "odata-openapi/lib/csdl2openapi";
import { parse } from "rsdl-js/lib/parser";

class ViewerListener extends Listener {
  private host: string;
  private basePath: string;

  constructor(host, basePath) {
    super("ui-viewer");
    this.host = host;
    this.basePath = basePath;
  }
  callback = (rsdl: string) => {
    const csdlJson = convert2csdl(rsdl);
    const openapi = convertCsdlJson2OpenApi(csdlJson, {
      basePath: this.basePath,
      host: this.host,
      scheme: "http",
    });

    this.config.openApiTabContent.innerHTML = JSON.stringify(openapi, null, 2);
    this.config.csdlTabContent.innerHTML = JSON.stringify(csdlJson, null, 2);
    SwaggerUI({
      dom_id: this.config.swaggerUiId,
      spec: openapi,
    });
  };
}

function initViewers(app: App, host, basePath) {
  const viewerListener = new ViewerListener(host, basePath);
  app.addListener(viewerListener);
  return viewerListener;
}

function convert2csdl(rsdl: string) {
  try {
    const json = parse(rsdl, includeReader(rsdl));

    if (json.$$errors) {
      json.$$errors.map((error) =>
        console.error(`source:${error.target} ${error.message}`)
      );
      delete json.$$errors;
    }

    return json;
  } catch (e) {
    console.error(e);
    return;
  }
}

export function convertCsdlJson2OpenApi(json, opts = {}) {
  return csdl2openapi(json, opts);
}

export function includeReader(source) {
  return () => {
    return source;
  };
}

export { initViewers };
