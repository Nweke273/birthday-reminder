import React from "react";
import { celebrants } from "./Celebrants";

export const Celebrant = (props) => {
  const { id, name, age, image } = props;

  const notifyCelebrant = (id) => {
    let notifiedCelebrant = celebrants.filter(
      (Celebrant) => Celebrant.id === id
    );
    alert(
      "A Birthday notification has being sent to " + notifiedCelebrant[0].name
    );
  };
  return (
    <div className="container">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <span className="age">{age}</span>
      </div>
      <button className="notify-btn" onClick={() => notifyCelebrant(id)}>
        Notify
      </button>
    </div>
  );
};
