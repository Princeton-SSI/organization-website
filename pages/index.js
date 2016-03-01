/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import { Button, Alert, Input } from 'react-bootstrap';
import ControlledCarousel from '../components/controlled-carousel.js';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlertVisible: false,
      name: 'Mystery Person',
      nameInput: '',
    };

    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAlertSubmit = this.handleAlertSubmit.bind(this);
  }

  handleAlertDismiss() {
    this.setState({isAlertVisible: false});
    this.setState({nameInput: ''});
  }

  handleAlertSubmit() {
    const nameInput = this.state.nameInput;
    this.setState({isAlertVisible: false});
    this.setState({name: nameInput});
    this.setState({nameInput: ''});
  }

  handleAlertShow() {
    this.setState({isAlertVisible: true});
  }

  handleChange() {
    this.setState({
      nameInput: this.refs.nameInput.getValue(),
    });
  }

  validationState() {
    const length = this.state.nameInput.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  render() {
    const component = this.state.isAlertVisible ?
      <div>
        <Alert onDismiss={this.handleAlertDismiss}>
          <h5>You've reached the secret part of the website. Go you!</h5>
          <p>Please enter your name</p>
          <Input
            type="text"
            bsStyle={this.validationState()}
            hasFeedback
            ref="nameInput"
            onChange={this.handleChange} />
          <Button onClick={this.handleAlertSubmit}>Submit!</Button>
        </Alert>
      </div>
      : <Button onClick={this.handleAlertShow}>Welcome</Button>;
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome {this.state.name} to the Princeton Sustainable Software Initiative website.</p>
        {component}
        <br></br>
        <ControlledCarousel />
      </div>
    );
  }
}
