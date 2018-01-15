import React from 'react';
import { render } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import NiceInputPassword from './NiceInputPassword';

describe('components', () => {
  describe('Levels', () => {
    it('renders successfully', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => true,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        name="myName"
        label="myLabel"
        securityLevels={securityLevels}
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      expect(markers.length).toBe(0);

      const descriptions = div.querySelectorAll('.input-password__description li');
      expect(descriptions.length).toBe(0);
    });

    it('renders marks and descriptions with NO class when all levels is valid and there is NO value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => true,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value=""
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('');
      expect(descriptions[1].className).toBe('');
      expect(descriptions[2].className).toBe('');
      expect(descriptions[3].className).toBe('');

      expect(markers[0].className).toBe('');
      expect(markers[1].className).toBe('');
      expect(markers[2].className).toBe('');
      expect(markers[3].className).toBe('');
    });

    it('renders marks and descriptions with SUCCESS class when all levels is valid and there is a value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => true,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value="abcd"
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('green');
      expect(descriptions[1].className).toBe('green');
      expect(descriptions[2].className).toBe('green');
      expect(descriptions[3].className).toBe('green');

      expect(markers[0].className).toBe('green');
      expect(markers[1].className).toBe('green');
      expect(markers[2].className).toBe('green');
      expect(markers[3].className).toBe('green');
    });

    it('renders marks and descriptions with danger class when only 1 level is valid and there is a value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => false,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => false,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => false,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value="abcd"
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('green');
      expect(descriptions[1].className).toBe('red');
      expect(descriptions[2].className).toBe('red');
      expect(descriptions[3].className).toBe('red');

      expect(markers[0].className).toBe('red');
      expect(markers[1].className).toBe('gray');
      expect(markers[2].className).toBe('gray');
      expect(markers[3].className).toBe('gray');
    });

    it('renders marks and descriptions with warning class when 2 levels is valid and there is a value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => false,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => false,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value="abcd"
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('green');
      expect(descriptions[1].className).toBe('green');
      expect(descriptions[2].className).toBe('red');
      expect(descriptions[3].className).toBe('red');

      expect(markers[0].className).toBe('yellow');
      expect(markers[1].className).toBe('yellow');
      expect(markers[2].className).toBe('gray');
      expect(markers[3].className).toBe('gray');
    });

    it('renders marks and descriptions with warning class when 3 levels is valid and there is a value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 2',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 3',
          validator: () => true,
        },
        {
          descriptionLabel: 'Sample 4',
          validator: () => false,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value="abcd"
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('green');
      expect(descriptions[1].className).toBe('green');
      expect(descriptions[2].className).toBe('green');
      expect(descriptions[3].className).toBe('red');

      expect(markers[0].className).toBe('yellow');
      expect(markers[1].className).toBe('yellow');
      expect(markers[2].className).toBe('yellow');
      expect(markers[3].className).toBe('gray');
    });

    it('must validate with regex validator', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Validate letter',
          validator: /.*[a-zA-Z].*/,
        },
      ];
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
        showSecurityLevelDescription
        showSecurityLevelBar
        value="abcd"
      />, div);

      const input = div.querySelector('#myName');
      const markers = div.querySelectorAll('.input-password__marker div');
      const descriptions = div.querySelectorAll('.input-password__description li');

      expect(descriptions[0].className).toBe('red');
      expect(markers[0].className).toBe('gray');

      input.value = 'newValue';
      ReactTestUtils.Simulate.change(input);

      expect(descriptions[0].className).toBe('green');
      expect(markers[0].className).toBe('green');
    });

    it('calls onChange handler and return valid', () => {
      const onChange = jest.fn();
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        value="a"
        securityLevels={[
          {
            descriptionLabel: 'Sample 1',
            validator: () => true,
          },
        ]}
        onChange={onChange}
      />, div);

      const input = div.querySelector('#myName');
      input.value = 'newValue';
      ReactTestUtils.Simulate.change(input);

      expect(onChange).toHaveBeenCalled();
      expect(onChange.mock.calls[0][0].isValid).toBe(true);
    });

    it('calls onChange handler and return not valid', () => {
      const onChange = jest.fn();
      const div = document.createElement('div');
      render(<NiceInputPassword
        label="myLabel"
        name="myName"
        value="a"
        securityLevels={[
          {
            descriptionLabel: 'Sample 1',
            validator: () => false,
          },
        ]}
        onChange={onChange}
      />, div);

      const input = div.querySelector('#myName');
      input.value = 'newValue';
      ReactTestUtils.Simulate.change(input);

      expect(onChange).toHaveBeenCalled();
      expect(onChange.mock.calls[0][0].isValid).toBe(false);
    });
  });
});
