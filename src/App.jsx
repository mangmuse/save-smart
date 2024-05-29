import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ExpenseContextProvider } from "./context/Expense/ExpenseContextProvider";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ExpenseContextProvider>
        <Outlet />
      </ExpenseContextProvider>
    </>
  );
}
