import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      results: Array(25).fill(""),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({value: value});
  }

  render() {
    return(
      <div>
        <Input
          value={this.state.value}
          onChange={this.onChange}
        />

        <Results
          results={this.state.results}
        />
      </div>
    )
  }
}


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <form>
        <label>
          <input
            type="text"
            className="encrypted"
            value={value}
            onChange={this.handleChange}
            placeholder="encrypted string"
          />
        </label>
      </form>
    )
  }
}


class Results extends React.Component {
  render() {
    const results = this.props.results;
    const items = [];
    for(let i=1; i<=25; i++) {
      items.push(<Result i={i} value={results[i-1]}/>);
    }
    return (
      <div>
        {items}
      </div>
    );
  }
}


class Result extends React.Component {
  render() {
    const i = this.props.i;
    const value = this.props.value;
    return (
      <p className="result">
        key={i}
        <input
          type="text"
          value={value}
          className="decrypted"
          placeholder="decrypted string"
          readOnly>
        </input>
      </p>
    );
  }
}


ReactDOM.render(
  <div>
    <Page/>
  </div>,
  document.getElementById('root')
);
