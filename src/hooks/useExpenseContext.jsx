import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContextProvider";

export default function useExpenseContext() {
  return useContext(ExpenseContext);
}
