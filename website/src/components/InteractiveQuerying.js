import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';

/* Next Steps:
 - Make results a scrollable, static-size box / code-like box
 - Distinguish two kinds of results
*/

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
      responseElement: <p></p>,
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
        }
        this.setState({responseElement: <p>{result}</p>})
      }
    ).catch(function(err) {
      console.error(err);
    });
  }

  // select, expand, filter, skip, top, count, orderby
  formatQuery(query) {
    let formattedQuery = query.replace(/select/g, "$select");
    formattedQuery = formattedQuery.replace(/expand/g, "$expand");
    formattedQuery = formattedQuery.replace(/filter/g, "$filter");
    formattedQuery = formattedQuery.replace(/skip/g, "$skip");
    formattedQuery = formattedQuery.replace(/top/g, "$top");
    formattedQuery = formattedQuery.replace(/count/g, "$count");
    formattedQuery = formattedQuery.replace(/orderby/g, "$orderby");
    formattedQuery = formattedQuery.replace(/$$/g, "$");
    formattedQuery = formattedQuery.substring(0, formattedQuery.length - 1);

    /*let queryPieces = query.split("?");
    let formattedQuery = queryPieces[0];
    for (let i = 1; i < queryPieces.length; i++) {
      let piece = queryPieces[i];
      if (!piece.startsWith('$')) {
        formattedQuery += "?$" + piece;
      } else {
        formattedQuery += "?" + piece;
      }
    }*/

    return formattedQuery;
  }

  render() {
    return (
      <div>
        <Query updateQueryResults={this.updateQueryResults} setToDefault={this.setToDefault} id={this.props.id}/>
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
      <h3>Query</h3>
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
      <h3>Results</h3>
      <div style={{
                "height": "120px",
                "borderRadius": "0.4rem",
                "overflow": "hidden",
                "overflowY": "scroll",
                "color": "black",
                "width": "100%",
                "background": "#eee",
                "padding": "1rem"
            }}>
        {this.props.results}
      </div>
      </div>
    );
  }
}

export default InteractiveQuerying;