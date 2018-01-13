import React from 'react';
import { render } from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils';

import NiceInputPassword from './NiceInputPassword';

describe('components', () => {
  describe('NiceInputPassword', () => {
    it('renders successfully', () => {
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
      />, div);
    });
  });
});
