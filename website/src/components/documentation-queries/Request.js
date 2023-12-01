import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class Request extends Component {
  render() {
    return (
      <div>
        <InputGroup style={{ paddingBottom: '1rem' }}>
          <InputGroup.Text>
            {this.props.command} {this.props.query}
          </InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
}

export default Request;
