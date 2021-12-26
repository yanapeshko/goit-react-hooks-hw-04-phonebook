import { PropTypes } from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, handleDelete }) {
  const contactsList = contacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      <div>
        <span className={s.item_text}>
          {name}: {number}
        </span>
        <button
          className={s.item_button}
          id={id}
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul className={s.list}>{contactsList}</ul>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
