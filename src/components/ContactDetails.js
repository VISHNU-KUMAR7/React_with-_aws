import React from "react";
import user from "../images/users.png";
import { useLocation } from "react-router";
const ContactDetails = (props) => {
  const contact = { id: 1, name: "vishnu", email: "vishnu@gmail.com" };
  const { state } = useLocation();
  const { id, name, email } = state.contact;
  return (
    <>
      <div className="main">
        <h2> </h2>
        <div className="ui card centered">
          <div className="image">
            <img src={user} alt="user" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="header">{email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactDetails;
