import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { quote: "" };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        const quote = res.data.slip.advice;
        this.setState({ quote });
      })
      .catch((err) => {});
  };

  render() {
    const { quote } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{quote}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span> Another Quote! </span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
