import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";

import { AppContainer as ReactHotLoader } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Dashboard from './components/Dashboard';

const render = (Component) => {
  ReactDOM.render(
   <Provider store={store}>
    <ReactHotLoader>
      <Component/>
    </ReactHotLoader>
    </Provider>,
    document.getElementById('root')
  );
};

render(Dashboard);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Dashboard', () => {
    render(Dashboard)
  });
}

/* NOTE
1. Setting set devServer: { hot: true } causes webpack will expose the module.hot API to our code

2. We use the module.hot hook to enable HMR for specific resources (App.js in this example).
The most important property here is module.hot.accept, which specifies how to handle changes to specific dependencies.

3. Whenever src/components/App.js or its dependencies are changed module.hot.accept will fire the render method.
The render method will even fire when App.css is changed because it is included in App.js. */

/* TODO
1. For some reason PropTypes doesnt work properly yet. Will fix maybe
*/
