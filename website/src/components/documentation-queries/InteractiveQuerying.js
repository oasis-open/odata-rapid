import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InteractiveQuerying.css';
import {Component} from 'react';
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from '@docusaurus/BrowserOnly';
//import { initUrlEditor } from "./..\\..\\..\\..\\tools\\urlEditor";

/// <summary>
/// Tool to allow a user to make a query on the Jetsons API and see the results
/// that is safe for deployment online.
/// </summary>
/// <prop name="defaultQuery">Default query to start with filled in.</prop>
/// <prop name="id">
///   ID to identify a specific component instance - must be unique;
///   otherwise, setting the default query can impact other instances.
/// </prop>
/// <remarks>
///   ID is required to isolate a specific InteractiveQuerying instance for the default query.
/// </remarks>
const InteractiveQuerying = (props) => {
  return (
    <BrowserOnly>
      {() => {
        const initUrlEditor = require("odata-url-editor").initUrlEditor;
        return <InteractiveQueryingInternal {...props} initUrlEditor={initUrlEditor} />;
      }}
    </BrowserOnly>
  )
}

/// <summary>Tool to allow a user to make a query on the Jetsons API and see the results.</summary>
/// <prop name="defaultQuery">Default query to start with filled in.</prop>
/// <prop name="id">
///   ID to identify a specific component instance - must be unique;
///   otherwise, setting the default query can impact other instances.
/// </prop>
/// <remarks>
///   ID is required to isolate a specific InteractiveQuerying instance for the default query.
/// </remarks>
class InteractiveQueryingInternal extends Component {
  constructor(props) {
    super(props);
    let newController = new AbortController();
    this.editor = null;

    this.state = {
      queryUrl: this.props.defaultQuery,
      responseElement: <CodeBlock className="language-json">[Loading...]</CodeBlock>,
      controller: newController,
      signal: newController.signal
    }
  }

  /// <summary>Start with results displayed.</summary>
  componentDidMount() {
    this.editor = this.props.initUrlEditor(document.getElementById(this.props.id));
    this.editor.setUrl(this.props.defaultQuery);
    let schema = `
    type Company
    {
        stockSymbol: String
        name: String
        incorporated: Date
        employees: [Employee]
    }

    type Employee
    {
        key id: Integer
        firstName: String
        lastName: String
        title: String
    }

    service {
        company: Company
        competitors: [Company]
    }`
    this.editor.updateSchema(schema);
    this.fetchResults(this.props.defaultQuery);
  }

  /// <summary>Abandons fetch request before component unmounts.</summary>
  componentWillUnmount() {
    this.state.controller.abort();
  }

  /// <summary>Gets the results for the query entered by the user.</summary>
  updateQueryResults = () => {
    let newQuery = this.editor.getUrl();
    this.setState({queryUrl: newQuery});
    this.fetchResults(newQuery);
  }

  /// <summary>
  ///   Sets the query/results to the default given from <propref name="defaultQuery"/>.
  /// </summary>
  setToDefault = () => {
    this.editor.setUrl(this.props.defaultQuery);
    this.setState({queryUrl: this.props.defaultQuery});
    this.fetchResults(this.props.defaultQuery);
  }

  /// <summary>
  ///   Fetches the results for a given <paramref name="query"> and updates the results accordingly.
  /// </summary>
  /// <param name="query">Query on the Jetsons API.</param>
  fetchResults(query) {
    let signal = this.state.signal;
    fetch("https://jetsons.azurewebsites.net/" + query, {signal})
// for debugging against a local service:
//    fetch("https://localhost:44396/" + formattedQuery, {signal})
    .then (res => res.text())
    .then(
      (result) => {
        if (result === "The page cannot be displayed because an internal server error has occurred.") {
          result = "This query is not valid; please try a different query."
        } else {
          result = JSON.parse(result);
          result = JSON.stringify(result, null, 4);
        }
        let newResponse = <CodeBlock className="language-json">{result}</CodeBlock>
        this.setState({responseElement: newResponse})
      }
    ).catch(function(err) {
      console.error(err);
    });
  }

  /// <summary>
  /// Adds '$' before commands if missing, AKA after '?', '(', '&', and ';'.
  /// Currently not used since Jetsons supports no-$ requests.
  /// </summary>
  /// <param name="query">Query to reformat.</param>
  /// <returns>The reformatted query (unchanged if no '$' are missing).</returns>
  formatQuery(query) {
    let formattedQuery = "";
    for (let i = 0; i < query.length - 1; i++) {
      let currChar = query.charAt(i);
      formattedQuery += currChar;
      if ((currChar == '?' || currChar == '(' || currChar == '&' || currChar == ';')
          && query.charAt(i+1) != '$') {
        formattedQuery += '$';
      }
    }
    formattedQuery += query.charAt(query.length - 1);
    return formattedQuery;
  }

  render() {
    return (
      <div>
        <Query
          updateQueryResults={this.updateQueryResults}
          setToDefault={this.setToDefault}
          id={this.props.id}
        />
        <Results results={this.state.responseElement} />
      </div>
    );
  }
}

/// <summary>Allows a user to enter queries, starting with a default query.</summary>
/// <prop name="setToDefault">Function to set the query to a default query.</prop>
/// <prop name="updateQueryResults">Function to update the results based on the user-entered query.</prop>
class Query extends Component {
  render() {
    return (
      <>
      <p><strong>Example Query:</strong></p>
      <InputGroup>
        <InputGroup.Text style={{"paddingRight":"0"}}>GET /</InputGroup.Text>
        <div className="query-editor" id={this.props.id}/>
        <Button variant="outline-primary" onClick={() => this.props.updateQueryResults()}>
          Get Result
        </Button>
        <Button style={{"borderLeft":"none"}} variant="outline-secondary" onClick={() => this.props.setToDefault()}>
          Revert
        </Button>
      </InputGroup>
      </>
    );
  }
}

/// <summary>Displays the results given by <propref name="results"/>.</summary>
/// <prop name="results">Results text.</prop>
class Results extends Component {
  render() {
    return (
      <div style={{
                "paddingTop": "1rem",
                "paddingBottom": "1rem"
            }}>
        <p><strong>Result:</strong></p>
        {this.props.results}
      </div>
    );
  }
}

export default InteractiveQuerying;
