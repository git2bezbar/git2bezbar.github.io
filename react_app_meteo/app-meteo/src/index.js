import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import InfosPrinc from './InfosPrinc';

class App extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <InfosPrinc></InfosPrinc>
      <h1>Bonjour à tous</h1>
    </div>

  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);