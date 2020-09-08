import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';

import './index.scss';

import NiceInputPassword from '../src/NiceInputPassword';

const levelBarCss = level => ({
  height: '8px',
  width: level > 0 ? `${((100 / 4) * level)}%` : '100%',
  marginTop: 16,
  transition: 'width 0.5s ease',
  backgroundColor: ['#EFEFEF', 'red', 'orange', 'yellow', 'green'][level],
  borderRadius: 0,
});

const CustomLevelBar = levels => <div style={levelBarCss(levels)} />;

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
        descriptionLabel: <Typography>1 number</Typography>,
        validator: /.*[0-9].*/,
      },
      {
        descriptionLabel: <Typography>1 lowercase letter</Typography>,
        validator: /.*[a-z].*/,
      },
      {
        descriptionLabel: <Typography>1 uppercase letter</Typography>,
        validator: /.*[A-Z].*/,
      },
      {
        descriptionLabel: <Typography>6 of length</Typography>,
        validator: /^.{6,}$/,
      },
    ];
    return (
      <div className="wrap">
        <Typography variant="h5">Common usage</Typography>
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
        <br />

        <Typography variant="h5">Material-UI InputLabel and TextField</Typography>
        <NiceInputPassword
          label="Password"
          name="pass4"
          LabelComponent={InputLabel}
          InputComponent={TextField}
          InputComponentProps={{
            variant: 'outlined',
            InputProps: {
              endAdornment: <LockIcon />,
            },
          }}
          value={this.state.pass4}
          showSecurityLevelBar
          securityLevels={securityLevels}
          onChange={this.handleChange}
        />
        <hr />
        <br />

        <Typography variant="h5">Custom levelBar</Typography>
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
          showSecurityLevelBar
          renderLevelBarComponent={CustomLevelBar}
          value={this.state.pass5}
          securityLevels={securityLevels}
          onChange={this.handleChange}
        />
        <hr />
        <br />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
