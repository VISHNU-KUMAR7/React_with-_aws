// I want to see the changes.
import React from "react";
import CardContact from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <CardContact contact={contact} />;
  });
  return (
    <div className="ui main">
      <h2>hello</h2>
      <h2>
        Contact list
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
