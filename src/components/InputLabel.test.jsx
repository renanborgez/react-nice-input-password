import React from 'react';
import { render } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import InputLabel from './InputLabel';

describe('components', () => {
  describe('InputLabel', () => {
    it('renders successfully', () => {
      const div = document.createElement('div');
      render(<InputLabel
        label="myLabel"
        name="myName"
        onChange={() => {}}
        value=""
      />, div);
    });

    it('renders the password as visible text', () => {
      const div = document.createElement('div');
      render(<InputLabel
        label="myLabel"
        name="myName"
        visible
        onChange={() => {}}
        value=""
      />, div);

      const input = div.querySelector('#myName');
      expect(input.getAttribute('type')).toBe('text');
    });

    it('renders with the right properties', () => {
      const div = document.createElement('div');
      render(<InputLabel
        label="myLabel"
        name="myName"
        placeholder="myPlaceholder"
        onChange={() => {}}
        value="myValue"
        startAdornment={<div className="start-adorn">A</div>}
        endAdornment={<div className="end-adorn">B</div>}
      />, div);

      const input = div.querySelector('#myName');
      const label = div.querySelector('label');
      const startAdornment = div.querySelector('.start-adorn');
      const endAdornment = div.querySelector('.end-adorn');

      expect(label.textContent).toContain('myLabel');
      expect(label.htmlFor).toBe('myName');
      expect(input.name).toBe('myName');
      expect(input.value).toBe('myValue');
      expect(input.placeholder).toBe('myPlaceholder');
      expect(startAdornment.textContent).toBe('A');
      expect(endAdornment.textContent).toBe('B');
    });

    it('calls onChange handler', () => {
      const onChange = jest.fn();
      const elementName = 'myInput';

      const div = document.createElement('div');
      render(<InputLabel
        label="myLabel"
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
