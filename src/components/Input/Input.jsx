import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [inpt, setInpt] = useState({ text: "" });

  const onChange = (e) => {
    setInpt({ text: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSendMessage(inpt.text);
    setInpt({ text: "" });
  };

  return (
    <div>
      <form className={classes.FormX} onSubmit={(e) => onSubmit(e)}>
        <input
          onChange={(e) => onChange(e)}
          value={inpt.text}
          type="text"
          placeholder="Upiši poruku!"
          autoFocus={true}
          className={classes.InputX}
        />
        <button className={classes.ButtonX}>Pošalji</button>
      </form>
    </div>
  );
};

export default Input;
