import React, { useState } from "react"; //import useState in order to make changes to the state of the app

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //call the useState with the initial value of the data you want to change inside the component function
  //use state allways returns an array with 2 elements: the initial value, and a function to modify the initial value
  //and assign it's value, using destructuring, to a constant

  const clickHandler = () => {
    setTitle("Laura Barosanca $$$");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
