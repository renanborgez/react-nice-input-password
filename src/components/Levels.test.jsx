import React from 'react';
import { render } from 'react-dom';

import Levels from './Levels';

describe('components', () => {
  describe('Levels', () => {
    it('renders successfully', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: true,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
      />, div);

      const markers = div.querySelectorAll('.input-password__marker div');
      expect(markers.length).toBe(4);

      const descriptions = div.querySelectorAll('.input-password__description li');
      expect(descriptions.length).toBe(4);

      expect(descriptions[0].textContent).toBe(securityLevels[0].descriptionLabel);
      expect(descriptions[1].textContent).toBe(securityLevels[1].descriptionLabel);
      expect(descriptions[2].textContent).toBe(securityLevels[2].descriptionLabel);
      expect(descriptions[3].textContent).toBe(securityLevels[3].descriptionLabel);
    });

    it('renders marks and descriptions with NO class when all levels is valid and there is NO value', () => {
      const securityLevels = [
        {
          descriptionLabel: 'Sample 1',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: true,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
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
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: true,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
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
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: false,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: false,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: false,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
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
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: false,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: false,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
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
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 2',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 3',
          isValid: true,
        },
        {
          descriptionLabel: 'Sample 4',
          isValid: false,
        },
      ];
      const div = document.createElement('div');
      render(<Levels
        securityLevels={securityLevels}
        dangerClassName="red"
        successClassName="green"
        warningClassName="yellow"
        normalClassName="gray"
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
  });
});
