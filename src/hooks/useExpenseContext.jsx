import { useContext } from "react";
import ExpenseContext from "../context/Expense/ExpenseContext";

export default function useExpenseContext() {
  return useContext(ExpenseContext);
}
