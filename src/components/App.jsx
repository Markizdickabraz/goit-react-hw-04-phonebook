import { useState, useEffect } from "react";
import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  const deleteClick = (name) => {
    setContacts(contacts.filter(contact => contact.name !== name))
  }

  
  useEffect(() => {
    const localContacts = window.localStorage.getItem('contacts', contacts);
    const contactsParse = JSON.parse(localContacts);
      setContacts(contactsParse)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))  
},[contacts])

  const formSubmitHandler = (data) => {
    const filterdContacts = contacts.map(contact => contact.name);
    const someName = filterdContacts.some(name => name === data.name);
      if (someName) {
      return alert(`${data.name}, is already in contacts`);
      } 
        setContacts([...contacts, {...data}])
  }

  const chengeFilter = e => {
    setFilter(e.currentTarget.value)
  }
  
  const normalizedFilter = filter.toLowerCase();
  let filtredComponents = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmitFunc={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={chengeFilter} />
        {filtredComponents.length > 0 &&  <ContactList items={filtredComponents} onDeleteClick={deleteClick} />}
      </div>
    );
  }


