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
  visible: PropTypes.bool,
  LabelComponent: PropTypes.any,
  InputComponent: PropTypes.any,
  InputComponentProps: PropTypes.object,
};

const defaultProps = {
  placeholder: '',
  value: '',
  className: '',
  style: null,
  startAdornment: null,
  endAdornment: null,
  visible: false,
  LabelComponent: args => React.createElement('label', args),
  InputComponent: args => React.createElement('input', args),
  InputComponentProps: {},
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
  visible,
  onChange,
  LabelComponent,
  InputComponent,
  InputComponentProps,
}) => (
  <LabelComponent htmlFor={name} className={className}>
    {label}
    <div className="input-password__field">
      {startAdornment && <div className="input-password__startAdornment">{startAdornment}</div>}
      <InputComponent
        name={name}
        id={name}
        className={className}
        value={value}
        type={visible ? 'text' : 'password'}
        style={style}
        placeholder={placeholder}
        onChange={onChange}
        {...InputComponentProps}
      />
      {endAdornment && <div className="input-password__endAdornment">{endAdornment}</div>}
    </div>
  </LabelComponent>
);

InputLabel.propTypes = propTypes;
InputLabel.defaultProps = defaultProps;

export default InputLabel;
