import React from "react";
import user from "../images/users.png";
const ContactDetails = () => {
  const contact = { id: 1, name: "vishnu", email: "vishnu@gmail.com" };
  return (
    <>
      <div className="main">
        <h2> </h2>
        <div className="ui card centered">
          <div className="image">
            <img src={user} alt="user" />
          </div>
          <div className="content">
            <div className="header">{contact.name}</div>
            <div className="header">{contact.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactDetails;
