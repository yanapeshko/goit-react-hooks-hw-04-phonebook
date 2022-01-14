import { useState } from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    resetState();
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit}>
      <label className={s.form_label}>
        Name
        <input
          className={s.form_input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label className={s.form_label}>
        Number
        <input
          className={s.form_input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <button className={s.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
