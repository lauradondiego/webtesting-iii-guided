import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Speak from "./components/Speak";

export const asyncFunc = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
};

//cant say const in classes so do like below
// static asyncFunc = () => {
// It was failing so I Added the word static and now it works
// use it if its failing in class components

// return new Promise(resolve => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 1000);
// });
//put outside of function
//takes in 2 arguments above
//pass in resolve function and pass in success once you pass in resolve function
// };
class App extends Component {
  state = {
    message: ""
  };
  speak = () => {
    this.setState({ message: "Bark" });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <Speak speak={this.speak} message={this.state.message} />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
