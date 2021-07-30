import { connect } from 'react-redux';
import * as ActionCreators from '../actions/counterCreators';

import React from 'react';

function Counter (props) {
  const {
    counter: { step, count },
    increment,
    decrement,
    onStepChange,
  } = props;
  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onStepChange} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(ActionCreators.increment()),
    decrement: () => dispatch(ActionCreators.decrement()),
    onStepChange: ({ target: { value } }) =>
      dispatch(ActionCreators.setStep(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
