// src/pages/ExpensePage.js
import React, { useState, useEffect } from "react";
import axios from "../services/api";
import API_BASE_URL from "../config";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: "", amount: "" , created_at:"", date:""});

  useEffect(() => {
    // Fetch expenses from the API when the component mounts
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      // 获取支出列表
    // axios.get("/api/expenses").then((response) => setExpenses(response.data));
      const response = await axios.get("/api/expenses/getExpenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleAddExpense = async () => {
    try {
      await axios.post("/api/expenses/addExpense", newExpense);
      alert("Expense added successfully!");
      fetchExpenses(); // Refresh the expenses list
      setNewExpense({ description: "", amount: "", created_at:"", date:"" }); // Reset the form
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  console.log("expenses-------:",expenses);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      
      {/* Input form for a new expense */}
      <div>
        <h2>Add Expense</h2>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
          style={{ margin: "10px", padding: "10px" }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          style={{ margin: "10px", padding: "10px" }}
        />
        <input
          type="date"
          placeholder="CreatedAt"
          value={newExpense.created_at}
          onChange={(e) => setNewExpense({ ...newExpense, created_at: e.target.value })}
          style={{ margin: "10px", padding: "10px" }}
        />
        <input
          type="date"
          placeholder="date"
          value={newExpense.date}
          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
          style={{ margin: "10px", padding: "10px" }}
        />
        <button onClick={handleAddExpense} style={{ padding: "10px 20px", marginTop: "10px" }}>
          Add Expense
        </button>
      </div>

      {/* List of expenses */}
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense) => (

            <li key={expense.id}>
              {expense.description} - ${expense.amount} - {expense.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensePage;