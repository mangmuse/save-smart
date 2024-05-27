import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ExpenseContextProvider } from "./context/ExpenseContextProvider";

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
