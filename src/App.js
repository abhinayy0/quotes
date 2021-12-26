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
    return <h1>{quote}</h1>;
  }
}

export default App;
