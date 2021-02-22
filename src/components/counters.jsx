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
    handleDelete = counterId => {
        const counters = this.state.counter.filter(c => c.id !== counterId);
        this.setState({counter: counters});
    };
    render() { 
        return( <div> 
            { this.state.counter.map(counter => 
            <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}>
            </Counter>) }
        </div>) ;
    }
}
 
export default Counters;