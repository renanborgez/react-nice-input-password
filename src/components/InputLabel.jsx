import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  placeholder: '',
  value: '',
  className: '',
};

const InputLabel = ({
  name,
  label,
  placeholder,
  value,
  className,
  onChange,
}) => (
  <label htmlFor={name} className={className}>
    {label}
    <input
      name={name}
      id={name}
      className={className}
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
