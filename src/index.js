import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';


const initialState = {
    count: 0
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', state, action);
  
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
  }

  const store = createStore(reducer, applyMiddleware(thunk));
//   store.dispatch({ type: "INCREMENT" });  // examples of dispatch,  the argument of dispatch is the action that reducer function requires
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "DECREMENT" });
//   store.dispatch({ type: "RESET" });
//   store.dispatch({ type: "DECREMENT" });


  const App = () => (
    <Provider store={store}> {/*After this, Counter, and children of Counter, and children of their children, and so on – all of them can now access the Redux store.*/}
      <Counter/>
    </Provider> // But not automatically. We’ll need to use the connect function on our components to access the store, that was done in Counter.js module
  );


// const App = () => (
//   <div>
//     <Counter />
//   </div>
// );

render(<App />, document.getElementById("root"));
