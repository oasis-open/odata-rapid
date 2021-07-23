import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import CodeBlock from "@theme/CodeBlock";


/// <summary>Tool to allow a user to make a query on the Jetsons API and see the results.</summary>
/// <prop name="defaultQuery">Default query to start with filled in.</prop>
/// <prop name="id">
///   ID to identify a specific component instance - must be unique; 
///   otherwise, setting the default query can impact other instances.
/// </prop>
/// <remarks>
///   ID is required to isolate a specific InteractiveQuerying instance for the default query.
/// </remarks>
class InteractiveQuerying extends Component {
  constructor(props) {
    super(props);
    let newController = new AbortController();

    this.state = {
      queryUrl: this.props.defaultQuery,
      responseElement: <CodeBlock className="language-json">[Loading]</CodeBlock>,
      controller: newController,
      signal: newController.signal
    }
  }

  /// <summary>Start with results displayed.</summary>
  componentDidMount() {
    document.getElementById(this.props.id).value = this.props.defaultQuery;
    this.fetchResults(this.props.defaultQuery);
  }
  
  /// <summary>Abandon fetch request before component unmounts.</summary>
  componentWillUnmount() {
    this.state.controller.abort();
  }

  /// <summary>Gets the results for the query entered by the user.</summary>
  updateQueryResults = () => {
    let newQuery = document.getElementById(this.props.id).value;
    if (newQuery !== "") {
      this.setState({queryUrl: newQuery});
      this.fetchResults(newQuery);
    } else {
      this.setToDefault();
      //this.setState({responseElement: <p></p>})
    }
  }

  /// <summary>
  ///   Sets the query/results to the default given from <propref name="defaultQuery"/>.
  /// </summary>
  setToDefault = () => {
    document.getElementById(this.props.id).value = this.props.defaultQuery;
    this.setState({queryUrl: this.props.defaultQuery});
    this.fetchResults(this.props.defaultQuery);
  }

  /// <summary>
  ///   Fetches the results for a given <paramref name="query"> and updates the results accordingly.
  /// </summary>
  /// <param name="query">Query on the Jetsons API.</param>
  fetchResults(query) {
    let formattedQuery = this.formatQuery(query);
    let signal = this.state.signal;
    fetch("https://jetsons.azurewebsites.net/" + formattedQuery, {signal})
    .then (res => res.text())
    .then(
      (result) => {
        if (result === "The page cannot be displayed because an internal server error has occurred.") {
          result = "This query is not valid; please try a different query."
        } else {
          result = this.formatJson(result);
        }
        let newResponse = <CodeBlock className="language-json">{result}</CodeBlock>
        this.setState({responseElement: newResponse})
      }
    ).catch(function(err) {
      console.error(err);
    });
  }

  /// <summary>Adds '$' before commands if missing, AKA after '?', '(', '&', and ';'.</summary>
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

  formatJson(json) {
    let formattedJson = "";
    let tabLevel = 0;
    let inQuote = false;
    for (let i = 0; i < json.length; i++) {
      let currChar = json.charAt(i);
      if (currChar == '{' || currChar == '[') {
        tabLevel++;
        formattedJson += currChar + '\n' + this.getTabSpaces(tabLevel);
      } else if (currChar == ',' && !inQuote) {
        formattedJson += currChar + '\n' + this.getTabSpaces(tabLevel);
      } else if (currChar == '}' || currChar == ']') {
        tabLevel--;
        formattedJson += '\n' + this.getTabSpaces(tabLevel) + currChar;
      } else if (currChar == ':') {
        formattedJson += currChar + " ";
      } else {
        if (currChar == '\"') {
          inQuote = !inQuote;
        }
        formattedJson += currChar;
      }
    }
    return formattedJson;
  }

  getTabSpaces(tabLevel) {
    let spaces = "";
    for (let i = 1; i <= tabLevel; i++) {
      spaces += "    ";
    }
    return spaces;
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
      <p><strong>Query:</strong></p>
      <InputGroup>
        <InputGroup.Text>GET http://rapid-pro.org/</InputGroup.Text>
        <FormControl
          id={this.props.id}
          /* For error checking: isInvalid="true" isValid="true" */
          placeholder="URL Query"
          aria-label="URL Query with buttons to revert and get results"
        />          
        <Button variant="outline-primary" onClick={() => this.props.updateQueryResults()}>
          Get Results
        </Button>
        <Button variant="outline-secondary" onClick={() => this.props.setToDefault()}>Revert</Button>
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