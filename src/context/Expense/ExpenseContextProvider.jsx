import { useReducer } from "react";
import { expenseReducer, initialState } from "./expenseReducer";
import ExpenseContext from "./ExpenseContext";

export function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}
