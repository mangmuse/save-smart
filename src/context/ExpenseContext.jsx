import { createContext, useReducer } from "react";
import { expenseReducer, initialState } from "./ExpenseReducer";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}
