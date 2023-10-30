import React, { Component } from "react";

import PropTypes from "prop-types";

import css from './filter.module.css'

class Filter extends Component {

    handlerInputChange = event => {
    const { contactsFilterHandler } = this.props;
    contactsFilterHandler(event.currentTarget.name, event.currentTarget.value);
  };

  render() {
    return (
      <input
        type="text"
        name='filter'
        value={this.props.filter}
        onChange={this.handlerInputChange}
        placeholder="find contacts by name"
        className={css.input}
      ></input>
    )
  };
};


Filter.propTypes = {
  filter: PropTypes.string,
  contactsFilterHandler: PropTypes.func,
};


export default Filter;