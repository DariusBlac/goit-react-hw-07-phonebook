import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, getAllThunk } from 'store/contacts/thunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const { contacts, filter } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  let filteredContacts = null;
  filteredContacts = contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllThunk());
    console.log('mount');
  }, [dispatch]);

  const createdListItems = array => {
    return array.map(el => {
      return (
        <li key={el.id} className={css.list_item}>
          <ContactItem
            name={el.name}
            number={el.phone}
            onClickDelete={handleDelete}
            id={el.id}
          />
        </li>
      );
    });
  };

  return (
    <ul className={css.list}>
      {filteredContacts
        ? createdListItems(filteredContacts)
        : createdListItems(contacts.items)}
    </ul>
  );
};
