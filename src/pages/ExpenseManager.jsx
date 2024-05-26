import { Outlet, useOutletContext } from "react-router-dom";
import AddForm from "../components/AddForm/AddForm";
import Months from "../components/Months/Months";

export default function ExpenseManager() {
  const { expenses, handleAddExpense } = useOutletContext();
  return (
    <div>
      <AddForm onAdd={handleAddExpense} />
      <Months />
      <Outlet context={expenses} />
    </div>
  );
}
