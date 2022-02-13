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
    for(let i=1; i<=5; i++) {
      const list = [];
      for(let j=1; j<=5; j++) {
        list.push(<Result i={5 * (i - 1) + j}/>);
      }
      items.push(<li className="element">{list}</li>);
    };
    return <ul>{items}</ul>;
  }
}


class Result extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    const i = this.props.i;
    return (
      <p className="result">
        key={i}
        <input
          type="text"
          value=""
          placeholder="decrypted string"
          readonly>
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
