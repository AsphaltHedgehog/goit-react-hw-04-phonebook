import {useState, useEffect} from "react";

import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

import css from './contactsbook.module.css'


function ContactsBook() {
  const [contacts, setContact] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const contactSubmitHandler = data => {
    const { name, number } = data;
    if (contacts.find((contact) => contact.name === name || contact.number === number)) {
      alert('this contact already exist');
      return;
    }

    const contact = {
      id: crypto.randomUUID(),
      name: name,
      number: number,
    };

    setContact(prev => [...prev, contact]);
  };

  const handlerDeleteContact = (id) => {
    setContact(prev => prev.reduce((acc, con) => {
        if (con.id !== id) {
          acc.push(con);
        };
        return acc;
      }, [])
    )
  };
  
  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactsForm onSubmit={contactSubmitHandler} />
      <div>
        <h2 className={css.title}>Contacts</h2>
        {contacts.length > 0 &&
          <div>
            <Filter
              filter={filter}
              contactsFilterHandler={(value) => setFilter(value)}
            />
            <ul className={css.list}>
              <ContactsList
                contacts={contacts}
                filter={filter}
                handlerDeleteContact={handlerDeleteContact}
              />
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default ContactsBook;