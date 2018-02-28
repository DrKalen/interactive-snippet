import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

// tests push

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
