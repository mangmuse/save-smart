import { useOutletContext, useParams } from "react-router-dom";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import { ListWrapper, NoExpensesMessage, Wrapper } from "./Expenses.styled";

export default function Expenses() {
  const { month } = useParams();
  const expenses = useOutletContext();

  const filteredData = expenses
    .filter((data) => {
      const expenseMonth = new Date(data.date).getMonth() + 1;
      return expenseMonth === parseInt(month, 10);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  console.log(filteredData);
  return (
    <Wrapper>
      <ExpenseSummary expenses={filteredData} />
      <ListWrapper>
        {filteredData.length > 0 &&
          filteredData.map((ex) => (
            <ExpenseCard key={ex.id} data={ex}>
              {ex.item}
            </ExpenseCard>
          ))}
        {filteredData.length === 0 && (
          <NoExpensesMessage>지출이 없습니다.</NoExpensesMessage>
        )}
      </ListWrapper>
    </Wrapper>
  );
}