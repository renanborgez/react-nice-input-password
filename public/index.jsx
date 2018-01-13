import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import NiceInputPassword from '../src/NiceInputPassword';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({
      inputValue: data.value,
    });
  }

  render() {
    return (
      <div className="wrap">
        <NiceInputPassword
          label="Password"
          securityLevels={[
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
          ]}
          name="password"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
