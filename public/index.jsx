import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import NiceInputPassword from '../src/NiceInputPassword';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({
      [data.name]: data.value,
    });
  }

  render() {
    const securityLevels = [
      {
        descriptionLabel: 'At least 1 number',
        validator: /.*[0-9].*/,
      },
      {
        descriptionLabel: 'At least 1 letter',
        validator: /.*[a-zA-Z].*/,
      },
      {
        descriptionLabel: 'At least 1 uppercase letter',
        validator: /.*[A-Z].*/,
      },
      {
        descriptionLabel: 'At least 1 L letter',
        validator: /.*[L].*/,
      },
    ];
    return (
      <div className="wrap">
        <h2>Simple input</h2>
        <NiceInputPassword
          label="Password"
          name="pass1"
          placeholder="Type your password here"
          value={this.state.pass1}
          onChange={this.handleChange}
        />
        <hr />

        <h2>With levelbar</h2>
        <NiceInputPassword
          label="Password"
          name="pass2"
          showSecurityLevelBar
          securityLevels={securityLevels}
          value={this.state.pass2}
          onChange={this.handleChange}
        />
        <hr />

        <h2>With levelbar and descritionLevelBar</h2>
        <NiceInputPassword
          label="Password"
          name="pass3"
          showSecurityLevelBar
          showSecurityLevelDescription
          securityLevels={securityLevels}
          value={this.state.pass3}
          onChange={this.handleChange}
        />
        <hr />

        <h2>With start and end adornment</h2>
        <NiceInputPassword
          label="Password"
          name="pass4"
          showSecurityLevelBar
          showSecurityLevelDescription
          securityLevels={securityLevels}
          value={this.state.pass4}
          onChange={this.handleChange}
          style={{ paddingLeft: 15 }}
          startAdornment={<div style={{ position: 'absolute', top: 2, left: 5 }}>Ξ</div>}
          endAdornment="OK"
        />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
