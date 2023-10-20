import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContactThunk } from 'store/contacts/thunk';

export const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { contacts } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const createContact = body => {
    const isAlreadyExist = contacts.items.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${isAlreadyExist.name} is already in contacts`);
    dispatch(createContactThunk(body));
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setPhone(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Name</h3>
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div>
        <h3>Number</h3>
        <input
          className={css.input}
          type="tel"
          name="number"
          onChange={handleChange}
          value={phone}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
