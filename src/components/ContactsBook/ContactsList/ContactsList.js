import React, { Component } from "react";

import PropTypes from "prop-types";

import css from './contactlist.module.css'

class ContactsList extends Component {

  renderContactsHandler = () => {
    const { filter, contacts, handlerDeleteContact } = this.props;
    
    const filteredList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filteredList.map(({ id, name, number }) => (
      <li key={id} className={css.item}>{name}: {number}
        <button
          type='button'
          data-id={id}
          onClick={() => handlerDeleteContact(id)}
          className={css.btn}
        >Delete</button>
      </li>
    ));
  };

  // renderFilteredContactsHandler = () => {
  //   const { filter, contacts, handlerDeleteContact } = this.props;

  //   const filteredList = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()));
    
  //   return filteredList.map(({ id, name, number }) => (
  //     <li key={id} className={css.item}>{name}: {number}
  //       <button
  //         type='button'
  //         data-id={id}
  //         onClick={() => handlerDeleteContact(id)}
  //         className={css.btn}
  //       >Delete</button>
  //     </li>
  //   ));
  // }; 

  render() {
    return (
      <div className={css.wrapper}>
        {this.renderContactsHandler()}
        {/* {this.props.filter === '' ?
          this.renderContactsHandler() :
          this.renderFilteredContactsHandler()
        } */}
      </div>
    );
  };
};


ContactsList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  handlerDeleteContact: PropTypes.func,
}



export default ContactsList;