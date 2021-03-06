import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        const { onReset, counter, onDelete, onIncrement } = this.props;

        console.log('Counters - rendered');

        return( <div> 
            <button onClick={onReset} className="brn btn-primary btn-sm m-2"> Reset </button>
            { counter.map(counter => 
                <Counter key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement} 
                    counter={counter}
                />) 
            }
        </div>) ;
    }
}
 
export default Counters;