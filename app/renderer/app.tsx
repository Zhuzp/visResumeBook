import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Router from './router';
// 👇 引入 store
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
