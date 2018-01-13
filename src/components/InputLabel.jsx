import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  placeholder: '',
  value: '',
};

const InputLabel = ({
  name,
  label,
  placeholder,
  value,
  onChange,
}) => (
  <label htmlFor={name}>
    {label}
    <input
      name={name}
      id={name}
      value={value}
      type="password"
      placeholder={placeholder}
      onChange={onChange}
    />
  </label>
);

InputLabel.propTypes = propTypes;
InputLabel.defaultProps = defaultProps;

export default InputLabel;
