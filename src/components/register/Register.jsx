import Modal from "./Modal";
import classes from "./Register.module.css";
import { useState } from "react";

const Register = (props) => {
  const [enteredAge, setEnteredAge] = useState("");

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addAgeHandler = (event) => {
    event.preventDefault();
    if (enteredAge < 18) {
      alert("Trebaš biti stariji od 18");
    } else {
      setEnteredAge("");
      props.onEnter();
    }
  };

  return (
    <Modal>
      <div className={classes.pozdrav}>
        <h2>
          Dobro došao u <b>KaliChat</b>!
        </h2>
        <p>Ovo je aplikacija u kojoj možeš chatati sam sa sobom.</p>
        <p>
          <i>Za početak, trebamo provjeriti koliko imaš godina</i>{" "}
        </p>
      </div>
      <form onSubmit={addAgeHandler} className={classes.input}>
        <label htmlFor="age">Koliko imaš godina?</label>
        <input
          onChange={ageChangeHandler}
          value={enteredAge}
          id="age"
          type="number"
          min={1}
          max={100}
        />
        <button className={classes.button} type="submit">
          Prihvati
        </button>
      </form>
    </Modal>
  );
};

export default Register;
