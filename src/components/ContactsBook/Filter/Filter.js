import PropTypes from "prop-types";

import css from './filter.module.css'

function Filter({filter,contactsFilterHandler}) {

  const handlerInputChange = event => {
    contactsFilterHandler(event.target.value)
  };

  return (
    <input
      type="text"
      name='filter'
      value={filter}
      onChange={handlerInputChange}
      placeholder="find contacts by name"
      className={css.input}
    ></input>
  );
};


Filter.propTypes = {
  filter: PropTypes.string,
  contactsFilterHandler: PropTypes.func,
};


export default Filter;