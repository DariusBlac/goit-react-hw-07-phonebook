import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phone book</h1>
      <FormCreateContact />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
