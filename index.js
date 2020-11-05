import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './index.css'

import store from './client/store'

ReactDOM.render(
  <Provider store={store}>
    <div>Howdy World!</div> 
  </Provider>, 
  document.getElementById('app')
);
