import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = async () => {
    const responce = await axios.get("https://api.adviceslip.com/advice");
    const { advice } = responce.data.slip;
    //console.log(advice);
    this.setState({ advice });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me Advice..!!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
