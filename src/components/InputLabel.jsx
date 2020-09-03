import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
};

const defaultProps = {
  placeholder: '',
  value: '',
  className: '',
  style: null,
  startAdornment: null,
  endAdornment: null,
};

const InputLabel = ({
  name,
  label,
  placeholder,
  value,
  className,
  startAdornment,
  endAdornment,
  style,
  onChange,
}) => (
  <label htmlFor={name} className={className}>
    {label}
    <div className="input-password__field">
      {startAdornment && <div className="input-password__startAdornment">{startAdornment}</div>}
      <input
        name={name}
        id={name}
        className={className}
        value={value}
        type="password"
        style={style}
        placeholder={placeholder}
        onChange={onChange}
      />
      {endAdornment && <div className="input-password__endAdornment">{endAdornment}</div>}
    </div>
  </label>
);

InputLabel.propTypes = propTypes;
InputLabel.defaultProps = defaultProps;

export default InputLabel;
