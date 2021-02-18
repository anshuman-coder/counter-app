import React, { Component } from 'react';

class Counter extends Component {
    state = {
        p_id : 12,
        count: 0
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(this.state.p_id)} className="btn btn-secondary btn-sm" >Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    };

}
 
export default Counter;