import React, { Component } from "react";

import PropTypes from "prop-types";

import css from './contactform.module.css'

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };
  
  // ================================================

  handlerInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  // ================================================

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Enter a name and number');
      this.reset()
      return;
    };
    
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: ''});
  };

  //========================================================
  

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerInputChange}
            placeholder="enter name"
            required
            className={css.input}
          />
          </label>
          <label className={css.label}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handlerInputChange}
              placeholder="enter telephone number"
              required
              className={css.input}
            />
        </label>
        <button type='submit' className={css.btn}>Add Contact</button>
      </form>
    </div>
    );
  };
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func
}




export default ContactsForm;