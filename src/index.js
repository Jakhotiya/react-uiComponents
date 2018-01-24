import React from 'react';
import { render } from 'react-dom';
import Form from './Form';

import './style.css';
import './magento-styles.css';

const App = () => (
  <div className='app-container'>
    <h1>Magento2 uiComponents in React {'\u2728'}</h1>
    <Form/>
  </div>
);

render(<App />, document.getElementById('root'));
