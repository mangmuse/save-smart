import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ExpenseProvider } from "./context/ExpenseContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ExpenseProvider>
        <Outlet />
      </ExpenseProvider>
    </>
  );
}
