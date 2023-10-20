import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const { error } = useSelector(store => store.contacts.contacts);

  return (
    <div className={css.container}>
      <h1>Phone book</h1>
      <FormCreateContact />
      {error && <b>Something with wrong</b>}
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
