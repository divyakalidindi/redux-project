import React, { Component } from 'react';
import NavBar from './navBar';
// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="class">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
