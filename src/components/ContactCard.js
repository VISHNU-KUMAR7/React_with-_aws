import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { useNavigate } from "react-router";
const CardContact = (props) => {
  const { id, name, email } = props.contact;
  const navigate = useNavigate();

  const detail = () => {
    navigate(`/contact/${id}`, { state: { contact: props.contact } });
  };
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <a onClick={detail}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </a>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" ,marginLeft:"10px"}}
      />
      <i
        className="edit alternate outline icon"
        style={{ color: "green", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      />
    </div>
  );
};

export default CardContact;
