import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
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
        return( <div> 
            <button onClick={this.handleReset} className="brn btn-primary btn-sm m-2"> Reset </button>
            { this.state.counter.map(counter => 
            <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}/>) 
            }
        </div>) ;
    }
}
 
export default Counters;