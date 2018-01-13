import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  securityLevels: PropTypes.arrayOf(PropTypes.shape({
    isValid: PropTypes.bool,
    descriptionLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
  })),
  normalClassName: PropTypes.string,
  dangerClassName: PropTypes.string,
  warningClassName: PropTypes.string,
  successClassName: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  securityLevels: [],
  value: '',
  normalClassName: 'none',
  dangerClassName: 'danger',
  warningClassName: 'warning',
  successClassName: 'success',
};

const Levels = ({
  securityLevels,
  value,
  normalClassName,
  dangerClassName,
  warningClassName,
  successClassName,
}) => {
  if (!securityLevels || securityLevels.length === 0) {
    return null;
  }

  const levelsMarkerNode =
    securityLevels.map((item, index) => {
      let itemClassName = '';
      const levelsLength = securityLevels.length;
      const levelsValidLength = securityLevels.filter(level => level.isValid).length;

      if (value !== '') {
        switch (true) {
        case levelsLength === levelsValidLength:
          itemClassName = successClassName;
          break;

        case levelsValidLength === 1 && index === 0:
          itemClassName = dangerClassName;
          break;

        case levelsValidLength > 1 && index < levelsValidLength:
          itemClassName = warningClassName;
          break;

        default:
          itemClassName = normalClassName;
          break;
        }
      }

      return <div className={itemClassName} key={`marker-${escape(item.descriptionLabel)}`} />;
    });

  const levelsDescriptionNode =
    securityLevels.map((item) => {
      let itemClassName = '';

      if (item.isValid && value !== '') {
        itemClassName = successClassName;
      } else if (!item.isValid && value !== '') {
        itemClassName = dangerClassName;
      }

      return (
        <li className={itemClassName} key={escape(item.descriptionLabel)}>
          {item.descriptionLabel}
        </li>
      );
    });

  return (
    <div className="input-password__level">
      <div className="input-password__marker">
        {levelsMarkerNode}
      </div>
      <ul className="input-password__description">
        {levelsDescriptionNode}
      </ul>
    </div>
  );
};

Levels.propTypes = propTypes;
Levels.defaultProps = defaultProps;

export default Levels;
