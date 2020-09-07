import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';

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
        descriptionLabel: <Typography>At least 1 number</Typography>,
        validator: /.*[0-9].*/,
      },
      {
        descriptionLabel: <Typography>At least 1 letter</Typography>,
        validator: /.*[a-zA-Z].*/,
      },
      {
        descriptionLabel: <Typography>At least 1 uppercase letter</Typography>,
        validator: /.*[A-Z].*/,
      },
      {
        descriptionLabel: <Typography>At least 1 L letter</Typography>,
        validator: /.*[L].*/,
      },
    ];
    return (
      <div className="wrap">
        <Typography variant="h5">Simple input</Typography>
        <NiceInputPassword
          label="Password"
          name="pass1"
          placeholder="Type your password here"
          value={this.state.pass1}
          onChange={this.handleChange}
        />
        <hr />

        <Typography variant="h5">With levelbar and visible text</Typography>
        <NiceInputPassword
          label="Password"
          name="pass2"
          visible
          showSecurityLevelBar
          securityLevels={securityLevels}
          value={this.state.pass2}
          onChange={this.handleChange}
        />
        <hr />

        <Typography variant="h5">With levelbar and descritionLevelBar</Typography>
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

        <Typography variant="h5">With start and end adornment</Typography>
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

        <Typography variant="h5">Using Material-UI InputLabel and TextField</Typography>
        <NiceInputPassword
          label="Password"
          name="pass5"
          LabelComponent={InputLabel}
          InputComponent={TextField}
          InputComponentProps={{
            variant: 'outlined',
            InputProps: {
              endAdornment: <LockIcon />,
            },
          }}
          value={this.state.pass5}
          showSecurityLevelBar
          securityLevels={securityLevels}
          onChange={this.handleChange}
        />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
