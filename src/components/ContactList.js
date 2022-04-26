// I want to see the changes.
import React, { useRef } from "react";
import CardContact from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const contacts = [
    { id: 1, name: "vishnu", email: "vishnu@gmail.com" },
    { id: 2, name: "kunal", email: "kunal@gmail.com" },
  ];
  const inputEl = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return <CardContact contact={contact} />;
  });
  const getSearchTerm = () => {
    console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value)
  };
  return (
    <div className="ui main">
      <h2>hello</h2>
      <h2>
        Contact list
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
