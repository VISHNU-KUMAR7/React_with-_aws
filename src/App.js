import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import api from "./api/contacts.js";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (search) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase);
      });
    }
  };
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            exact
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          {/* <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} /> */}
          <Route path="/contact/:id" element={<ContactDetails />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
