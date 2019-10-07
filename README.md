# React-Nice-Input-Password

[![Build Status](https://travis-ci.org/renanborgez/react-nice-input-password.svg?branch=master)](https://travis-ci.org/renanborgez/react-nice-input-password)
[![Coverage Status](https://coveralls.io/repos/github/renanborgez/react-nice-input-password/badge.svg?branch=master)](https://coveralls.io/github/renanborgez/react-nice-input-password?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frenanborgez%2Freact-nice-input-password.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Frenanborgez%2Freact-nice-input-password?ref=badge_shield)

A input password control built with and for [React](http://facebook.github.io/react/index.html)

## Demo

[https://codesandbox.io/s/o1v16rqqrz](https://codesandbox.io/s/o1v16rqqrz)

[![Sample](https://image.ibb.co/dJNFHR/sample.png)](https://image.ibb.co/dJNFHR/sample.png)

## Installation

The easiest way to use react-nice-input-password is to install it from npm and build it into your app with Webpack.

```js
npm install react-nice-input-password --save
```

You can then import react-nice-input-password and its styles in your application as follows:

```js
import NiceInputPassword from 'react-nice-input-password';
import 'react-nice-input-password/dist/react-nice-input-password.css';
```

## Usage

React-Nice-Input-Password uses the traditional input[type=password] behinde the cenes, but you can now validate the strenght level of this value and show it to your users.

The strenght can be passed as a `array` of `objects` to a prop of the component called `securityLevels`.

You can see a sample of code bellow:

```js
import React from 'react';
import NiceInputPassword from 'react-nice-input-password';
import 'react-nice-input-password/dist/react-nice-input-passord.css';

class App extends React.Component {
  state = {}
  handleChange = (data) => {
    this.setState({
      [data.name]: data.value,
    });
    console.log(`Value: ${passwordField.value}`);
  }
  render() {
    const { passwordField } = this.state;
    const value = passwordField && passwordField.value;

    return (
      <NiceInputPassword
        label="My password field"
        name="passwordField"
        value={value}
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
        ]}
        showSecurityLevelBar
        showSecurityLevelDescription
        onChange={this.handleChange}
      />
    );
  }
}
```

### Custom classNames

You can provide a custom `className` to the Nice Input Password and custom `className` to the color levels, which will be added to input, description and bullets level elements using `dangerClassName`, `warningClassName` and `successClassName`.

### Select Props

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| label | string or function | undefined | The label showned on top of input element |
| name | string | undefined | The name used on input element `name={name}` |
| placeholder | string | (empty string) | The placeholder used on input element `placeholder={placeholder}` |
| className | string | (empty string) | Optional class to be passed to niceinputpassword context |
| normalClassName | string | 'none' | The className used on level color
| dangerClassName | string | 'danger' | The className used on level color
| warningClassName | string | 'warning' | The className used on level color
| successClassName | string | 'success' | The className used on level color
| value | string | undefined | The value to be renderized on element
| showSecurityLevelBar | bool | false | Key to show or not the security level bullets of password
| showSecurityLevelDescription | bool | false | Key to show or not the security level description securityLevels object
| securityLevels | array of objects | [] | The array containing the objects to validate the password, see a sample of this object on after this table
| onChange | func | undefined | onChange handler: `@params: { name, value, isValid}`

## License

MIT Licensed. Copyright (c) Renan Borges 2018.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frenanborgez%2Freact-nice-input-password.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Frenanborgez%2Freact-nice-input-password?ref=badge_large)