import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EditExpense from "../pages/EditExpense";
import ExpenseManager from "../pages/ExpenseManager";
import Expenses from "../pages/Expenses/Expenses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ExpenseManager />,
      },
      {
        path: "expenses",
        element: <ExpenseManager />,
        children: [{ path: ":month", element: <Expenses /> }],
      },
      {
        path: "expenses/edit/:productId",
        element: <EditExpense />,
      },
    ],
  },
]);

export default router;
