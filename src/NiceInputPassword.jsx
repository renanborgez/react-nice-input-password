import React from 'react';
import PropTypes from 'prop-types';

import './NiceInputPassword.scss';
import InputLabel from './components/InputLabel';

const propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  visible: PropTypes.bool,
  LabelComponent: PropTypes.any,
  InputComponent: PropTypes.any,
  InputComponentProps: PropTypes.object,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  showSecurityLevelBar: PropTypes.bool,
  showSecurityLevelDescription: PropTypes.bool,
  normalClassName: PropTypes.string,
  dangerClassName: PropTypes.string,
  warningClassName: PropTypes.string,
  placeholder: PropTypes.string,
  successClassName: PropTypes.string,
  securityLevels: PropTypes.arrayOf(PropTypes.shape({
    descriptionLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.element,
    ]).isRequired,
    validator: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ]).isRequired,
  })),
  onChange: PropTypes.func,
};

const defaultProps = {
  value: '',
  className: '',
  placeholder: '',
  style: null,
  showSecurityLevelBar: false,
  showSecurityLevelDescription: false,
  securityLevels: [],
  visible: false,
  LabelComponent: args => React.createElement('label', args),
  InputComponent: args => React.createElement('input', args),
  InputComponentProps: {},
  normalClassName: 'none',
  dangerClassName: 'danger',
  warningClassName: 'warning',
  successClassName: 'success',
  onChange: () => {},
  startAdornment: null,
  endAdornment: null,
};

class NiceInputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: this.handleValidateAndGetLevels(''),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValidateAndGetLevels = this.handleValidateAndGetLevels.bind(this);
  }

  handleValidateAndGetLevels(value) {
    const levels = this.props.securityLevels.map((securityLevel) => {
      let isValid = false;
      if (securityLevel.validator && typeof securityLevel.validator === 'function') {
        isValid = securityLevel.validator(value);
      } else if (securityLevel.validator) {
        isValid = securityLevel.validator.test(value);
      }

      return {
        descriptionLabel: securityLevel.descriptionLabel,
        isValid,
      };
    });

    return levels;
  }

  handleChange(event) {
    const { target } = event;
    const levels = this.handleValidateAndGetLevels(target.value);
    this.setState({
      levels,
    });

    this.props.onChange({
      name: this.props.name,
      value: target.value,
      isValid: levels.filter(level => level.isValid).length === levels.length,
    });
  }

  render() {
    const {
      label,
      name,
      showSecurityLevelBar,
      showSecurityLevelDescription,
      securityLevels,
      normalClassName,
      dangerClassName,
      warningClassName,
      successClassName,
      className,
      value,
      placeholder,
      startAdornment,
      endAdornment,
      style,
      visible,
      LabelComponent,
      InputComponent,
      InputComponentProps,
    } = this.props;

    let inputClassName = '';
    const levelsMarkerNode =
    this.state.levels.map((item, index) => {
      let markerClassName = '';
      const levelsLength = this.state.levels.length;
      const levelsValidLength = this.state.levels.filter(level => level.isValid).length;

      if (value !== '') {
        switch (true) {
        case levelsLength === levelsValidLength:
          markerClassName = successClassName;
          break;

        case levelsValidLength === 1 && index === 0:
          markerClassName = dangerClassName;
          break;

        case levelsValidLength > 1 && index < levelsValidLength:
          markerClassName = warningClassName;
          break;

        default:
          markerClassName = normalClassName;
          break;
        }
      }

      if (index === 0) {
        inputClassName = markerClassName;
      }

      return (
        <div className={markerClassName} key={`marker-${escape(item.descriptionLabel)}-${index}`} />
      );
    });

    const levelsDescriptionNode =
      this.state.levels.map((item, index) => {
        let descriptionClassName = '';

        if (item.isValid && value !== '') {
          descriptionClassName = successClassName;
        } else if (!item.isValid && value !== '') {
          descriptionClassName = dangerClassName;
        }

        return (
          <li
            className={descriptionClassName}
            key={`description-node-${escape(item.descriptionLabel)}-${index}`}
          >
            {item.descriptionLabel}
          </li>
        );
      });

    return (
      <div className={`form-group input-password ${className}`}>
        <InputLabel
          label={label}
          name={name}
          placeholder={placeholder}
          className={inputClassName}
          value={value}
          style={style}
          startAdornment={startAdornment}
          visible={visible}
          endAdornment={endAdornment}
          onChange={this.handleChange}
          LabelComponent={LabelComponent}
          InputComponent={InputComponent}
          InputComponentProps={InputComponentProps}
        />
        {securityLevels && securityLevels.length > 0 ? (
          <div className="input-password__level">
            {showSecurityLevelBar ?
              <div className="input-password__marker">
                {levelsMarkerNode}
              </div> : null }
            {showSecurityLevelDescription ?
              <ul className="input-password__description">
                {levelsDescriptionNode}
              </ul> : null}
          </div>
        ) : null }
      </div>
    );
  }
}

NiceInputPassword.propTypes = propTypes;
NiceInputPassword.defaultProps = defaultProps;

export default NiceInputPassword;
