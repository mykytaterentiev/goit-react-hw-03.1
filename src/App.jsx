import './App.css'
import { useState, useEffect } from 'react'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

import initialContacts from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('savedContacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } 
    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('savedContacts', JSON.stringify(contacts))
  }, [contacts]);

  const [searchedValue, setSearchedValue] = useState('')

  const addContact = (newContact)=> {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  }

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchedValue.toLowerCase()))

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={searchedValue} onSearch={setSearchedValue}/>
      <ContactList items={visibleContacts} onDelete={deleteContact}/>
    </div>

  )
}

export default App
