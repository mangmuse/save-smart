import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import initialExpenseData from "./data/fakedata.json";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const [expenses, setExpenses] = useState(initialExpenseData);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Outlet
        context={{
          expenses,
          handleAddExpense,
          handleDeleteExpense,
          handleUpdateExpense,
        }}
      />
    </>
  );
}
