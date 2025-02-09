import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "./config";

const AddExpensePage = ({ fetchExpenses }) => {
  const [expense, setExpense] = useState({
    amount: "",
    description: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const addExpense = () => {
    axios.post("/api/expenses/addExpense", expense).then(() => {
      alert("Expense added successfully!");
      fetchExpenses(); // 刷新父组件的数据
    });
  };

  return (
    <div>
      <h1>Add New Expense</h1>
      <input name="amount" placeholder="Amount" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="">Select Category</option>
        {/* Dynamically fill options */}
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
      </select>
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpensePage;
