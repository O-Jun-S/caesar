import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({value: value});
  }

  render() {
    return(
      <Input value={this.state.value} onChange={this.onChange}/>
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
  constructor(props) {
    super(props);
    this.state = {
      results: Array(25).fill(""),
    }
  }

  render() {
    const items = [];
    // i*5-1は適当に決めた。ユニークであればよいので。
    for(let i=1; i<=25; i++) {
      items.push(<Result i={i} value={this.state.results[i-1]}/>);
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
    <Results/>
  </div>,
  document.getElementById('root')
);
