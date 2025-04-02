import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/contactsOps";
import { addContact } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact({ id: nanoid(), ...newContact }));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      {isLoading && <p> loading...</p>}
      {isError && <p>Error: {isError}</p>}
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
