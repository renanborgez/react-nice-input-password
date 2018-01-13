import React from 'react';
import { render } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import InputLabel from './InputLabel';

describe('components', () => {
  describe('InputLabel', () => {
    it('renders successfully', () => {
      const div = document.createElement('div');
      render(<InputLabel
        label=""
        name=""
        onChange={() => {}}
        value=""
      />, div);
    });

    it('renders with the right properties', () => {
      const div = document.createElement('div');
      render(<InputLabel
        label="myLabel"
        name="myName"
        placeholder="myPlaceholder"
        onChange={() => {}}
        value="myValue"
      />, div);

      const input = div.querySelector('#myName');
      const label = div.querySelector('label');

      expect(label.textContent).toBe('myLabel');
      expect(label.htmlFor).toBe('myName');
      expect(input.name).toBe('myName');
      expect(input.value).toBe('myValue');
      expect(input.placeholder).toBe('myPlaceholder');
    });

    it('calls onChange and returns data', () => {
      const onChange = jest.fn();
      const elementName = 'myInput';

      const div = document.createElement('div');
      render(<InputLabel
        label=""
        name={elementName}
        onChange={onChange}
        value=""
      />, div);

      const input = div.querySelector(`#${elementName}`);
      input.value = 'newValue';
      ReactTestUtils.Simulate.change(input);

      expect(onChange).toHaveBeenCalled();
    });
  });
});
