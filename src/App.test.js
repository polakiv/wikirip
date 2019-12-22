import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

it('renders without crashing', () => {
  const Grid = document.createElement('Grid');
  ReactDOM.render(<SamuraiJSApp />, Grid);
  ReactDOM.unmountComponentAtNode(Grid);
});
