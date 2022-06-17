import "./App.css";
import React from "react";
import { celebrants } from "./Celebrants";
import { Celebrant } from "./Celebrant";

function App() {
  const [birthdayCelebrants, setBirthdayCelebrants] =
    React.useState(celebrants);
  const [message, setMessage] = React.useState(celebrants.length +" Birthdays Today");
  const [buttonMessage, setButtonMessage] = React.useState(
    "Send Bulk Notification"
  );

  
  React.useEffect(() => {
    if (birthdayCelebrants.length < 1) {
      setMessage("Notification Sent");
      setButtonMessage("Success");
    }
  }, [birthdayCelebrants]);
  return (
    <React.Fragment>
      <div className="wrapper">
        <p>{message}</p>
        {birthdayCelebrants.map((celebrant) => {
          return <Celebrant key={celebrant.id} {...celebrant}></Celebrant>;
        })}
        <button type="button" onClick={() => setBirthdayCelebrants([])}>
          {buttonMessage}
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
