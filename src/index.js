import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  REDUX:
  store - хранилище, js object
  dispatch - функция, которая отправляет action в reducer
  reducer - pure func; (state, action) => state
  action - events. {type: string, ...bag}
  REACT-REDUX:
  connect - HOC. подписывает компонент на изменение store
  mapStateToProps - func, что именно взять из store
*/
