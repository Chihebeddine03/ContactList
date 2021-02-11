import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function Contacts() {
  let i;
  var returnValue = [];
  returnValue.push(<h1 style={{ fontFamily: "Trebuchet MS" }}>Kontakty</h1>);
  for (i = 0; i < contacts.length; i++) {
    returnValue.push(
      <div className="shadow p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[i].name}
          img={contacts[i].img}
          email={contacts[i].email}
          tel={contacts[i].tel}
        />
      </div>
    );
  }
  return returnValue;
}

export default Contacts;
