import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'store/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterValue = event => {
    const value = event.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <h3 className={css.title}>Filter by Name</h3>
      <input type="text" onChange={inputFilterValue} className={css.input} />
    </div>
  );
};
