import React from "react";

import './ExpenseForm.css'

const ExpenseForm = ()=>{
const onChnageHandler =(e)=>{
  console.log(e);
}
  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={onChnageHandler}/>
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01"/>
      </div>

      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2023-08-10"/>
      </div>
    </div>

    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      </div>
  </form>
}

export default ExpenseForm