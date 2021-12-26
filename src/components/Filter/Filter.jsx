import styles from './Filter.module.css';
import { PropTypes } from 'prop-types';

function Filter({ filter, onFilterChange }) {
  return (
    <label className={styles.filter_label}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
