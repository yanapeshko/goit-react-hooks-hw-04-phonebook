import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: v4(),
      name,
      number,
    };
    const isDuplicate = contacts.find(contact => contact.name === name);
    if (isDuplicate) alert(`Contact ${name} is already in the contacts`);
    setContacts([...contacts, contact]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  const visibleContacts = getVisibleContacts();
  return (
    <div className={s.main_container}>
      <div className={s.main_title_container}>
        <h1 className={s.main_title}>Phonebook</h1>
      </div>

      <ContactForm onSubmit={addContact} />

      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onFilterChange={setFilter} />
      <ContactList contacts={visibleContacts} handleDelete={deleteContact} />
    </div>
  );
}
