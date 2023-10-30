import PropTypes from "prop-types";

import css from './contactlist.module.css'

function ContactsList({contacts, filter, handlerDeleteContact}) {
  const renderContactsHandler = () => {
    
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


  return (
    <div className={css.wrapper}>
      {renderContactsHandler()}
    </div>
  );
};



ContactsList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  handlerDeleteContact: PropTypes.func,
}



export default ContactsList;