import React from "react";

function Card(props) {
  const email = props.email;
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt={props.name}
        className="rounded-circle"
        width="120"
        height="120"
      />
      <p className="font-weight-bold">
        E-mail: <a href="'mailto:{$email}"> {props.email} </a>
      </p>
      <p className="font-weight-bold">Telefon: {props.tel}</p>
    </div>
  );
}

export default Card;
