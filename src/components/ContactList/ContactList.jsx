import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'store/contacts/slice';

export const ContactList = () => {
  const { contacts, filter } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  let filteredContacts = null;
  filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const createdListItems = array => {
    return array.map(el => {
      return (
        <li key={el.id} className={css.list_item}>
          <ContactItem
            name={el.name}
            number={el.number}
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
        : createdListItems(contacts)}
    </ul>
  );
};
