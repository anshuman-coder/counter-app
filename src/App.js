import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {
  state = { 
    counter: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]
 };

handleIncrement = count => {
    const counters = [...this.state.counter];
    const index = this.state.counter.indexOf(count);
    counters[index]={...count};
    counters[index].value++;
    this.setState({counter: counters});
};

handleReset= () => {
  const counters =  this.state.counter.map(c => {c.value = 0;
    return c;
});
this.setState({counter: counters});
};

handleDelete = counterId => {
    const counters = this.state.counter.filter(c => c.id !== counterId);
    this.setState({counter: counters});
};

  render() { 
    return ( 
      <React.Fragment>
      <Navbar totalCounter = {this.state.counter.filter(c => c.value > 0 ).length} />
      <main className="container">
        <Counters
          counter = {this.state.counter}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </main>
      </React.Fragment>
       );
  }
}
 
export default App;