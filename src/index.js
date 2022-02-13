import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            className="encrypted"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="encrypted string"
          />
        </label>
      </form>
    )
  }
}


ReactDOM.render(
  <Input/>,
  document.getElementById('root')
);
