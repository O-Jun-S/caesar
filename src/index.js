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


class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="result">
        key=1
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
    {(() => {
      const items = [];
      for(let i=1; i<=5; i++) {
        const list = [];
        for(let j=1; j<=5; j++) {
          list.push(<Result/>);
        }
        items.push(<li className="element">{list}</li>);
      };
      return <ul>{items}</ul>;
    })()}
  </div>,
  document.getElementById('root')
);
