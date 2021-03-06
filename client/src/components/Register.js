import React, { Component } from 'react';
import { Header, Form, Button, Segment, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', is_admin: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, is_admin } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ email, password, passwordConfirmation, is_admin }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  // handleAdmin = (e, { value }) => this.setState({ is_admin: !this.state.is_admin })

  toggleAdmin = () => {
    this.setState({ is_admin: !this.state.is_admin })
  }

  render() {
    const { email, password, passwordConfirmation, is_admin } = this.state;

    const {value} = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Checkbox 
            label='Admin'
            onClick={this.toggleAdmin}
          />
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);
