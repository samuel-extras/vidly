import React, { Component } from 'react';
import Movies from "./components/movies.jsx"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <main className="container">
      <Movies/>
      </main>
     );
  }
}
 
export default App;