import React from 'react';
import PropTypes from 'prop-types';

import './NiceInputPassword.scss';
import InputLabel from './components/InputLabel';
import Levels from './components/Levels';

const propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  showLevels: PropTypes.bool,
  normalClassName: PropTypes.string,
  dangerClassName: PropTypes.string,
  warningClassName: PropTypes.string,
  successClassName: PropTypes.string,
  securityLevels: PropTypes.arrayOf(PropTypes.shape({
    descriptionLabel: PropTypes.string.isRequired,
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
  showLevels: false,
  securityLevels: [],
  normalClassName: 'none',
  dangerClassName: 'danger',
  warningClassName: 'warning',
  successClassName: 'success',
  onChange: () => {},
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
      if (typeof securityLevel.validator === 'function') {
        isValid = securityLevel.validator(value);
      } else {
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
    this.props.onChange({
      name: this.props.name,
      value: target.value,
    });

    this.setState({
      levels: this.handleValidateAndGetLevels(target.value),
    });
  }

  render() {
    const {
      label,
      name,
      showLevels,
      securityLevels,
      normalClassName,
      dangerClassName,
      warningClassName,
      successClassName,
      className,
      value,
    } = this.props;
    return (
      <div className={`form-group input-password ${className}`}>
        <InputLabel
          label={label}
          name={name}
          value={value}
          onChange={this.handleChange}
        />
        {showLevels && securityLevels && securityLevels.length > 0 ? (
          <Levels
            securityLevels={this.state.levels}
            normalClassName={normalClassName}
            dangerClassName={dangerClassName}
            warningClassName={warningClassName}
            successClassName={successClassName}
            value={value}
          />
        ) : null }
      </div>
    );
  }
}

NiceInputPassword.propTypes = propTypes;
NiceInputPassword.defaultProps = defaultProps;

export default NiceInputPassword;
