import React from 'react';
import { connect } from 'react-redux';

import { INCREMENT, DECREMENT, RESET } from './actions';
import { increment, decrement, reset } from './actions';

class Counter extends React.Component {

  increment = () => { //we get the state and the dispatch function in the props
    // this.props.dispatch(increment());
    this.props.increment();
  };
  
  decrement = () => {
    // this.props.dispatch(decrement());
    this.props.decrement();
  };

  reset = () => {
    // this.props.dispatch(reset());
    this.props.reset();
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}



// export default Counter;

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};


function mapStateToProps(state) { // this pass the items of the state we choose to the props of the components in connect function
  return {
    count: state.count
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps, mapDispatchToProps)(Counter); //we’re exporting the connected Counter using a high order function