import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App (props) {
  const { step, count, dispatch } = props;
  const increment = () => dispatch(ActionCreators.increment());
  const decrement = () => dispatch(ActionCreators.decrement());
  const onStepChange = ({ target: { value } }) =>
    dispatch(ActionCreators.setStep(Number(value)));

  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onStepChange} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => state;

/*
const withProps = connect(mapStateToProps);
const ComponentWithProps = withProps(App);
export default ComponentWithProps;

*/

export default connect(mapStateToProps)(App);
