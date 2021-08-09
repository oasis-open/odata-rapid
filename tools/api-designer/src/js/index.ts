import 'bootstrap/dist/css/bootstrap.css';
import 'swagger-ui/dist/swagger-ui.css';
import 'highlight.js/styles/default.css';
import '../css/main.scss';
import { initRsdlEditor } from 'rsdl-editor'; // TODO: this is a placeholder for the "rsdlEditor" project
import { MermaidEditor} from "visual-model-editor"; // TODO: this is a placeholder for the "visualModelEditor" project
import { initUrlEditor } from "url-editor"; // TODO: this is a placeholder for the "urlEditor" project
import { App, Listener } from './app';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

document.addEventListener('DOMContentLoaded', function (event) {
    // `app` is used for state management and messaging between the different components
    // this was a quick hack, not the best solution
    const app = new App();
  
    const rsdlEditor = initRsdlEditor(document.getElementById("editor"), (rsdl) => {
        app.publishRsdl("main", rsdl);
    });
    app.addListener(new Listener("main", (rsdl: string) => rsdlEditor.updateContent(rsdl)))
    
    const urlEditor = initUrlEditor(document.getElementById('uri-editor'));
    app.addListener(new Listener("urlEditor", (rsdl: string) => urlEditor.updateSchema(rsdl)));
  
    const mermaidEditor = new MermaidEditor(
      document.getElementById('rsdl-editor-gui-content'),
      document.getElementById('rsdl-editor-gui-tab'),
      window,
      (rsdl: string) => app.publishRsdl("visualEditor", rsdl)
    );
    app.addListener(new Listener("visualEditor", (rsdl: string) => mermaidEditor.loadRsdl(rsdl)));
  
    app.publishRsdl('main', rsdlEditor.getContent());
    hljs.highlightAll();
  
  });
  