import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import API_BASE_URL from "../config";

const AddExpenseForm = ({ fetchExpenses }) => {
  const [expense, setExpense] = useState({ amount: "", description: "", date: "", category: "" });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const addExpense = () => {
    axios.post("/api/expenses/addExpense", expense).then(() => {
      alert("Expense added successfully!");
      fetchExpenses();
    });
  };

  return (
    <div>
      <input name="amount" placeholder="Amount" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
};

AddExpenseForm.propTypes = {
  fetchExpenses: PropTypes.func.isRequired,
};

export default AddExpenseForm;
