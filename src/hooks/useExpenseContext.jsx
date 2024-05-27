import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function useExpenseContext() {
  return useContext(ExpenseContext);
}
