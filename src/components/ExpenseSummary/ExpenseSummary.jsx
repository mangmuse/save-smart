import { useParams } from "react-router-dom";
import {
  ExpenseItem,
  ExpenseItemDetail,
  ExpenseItemWrapper,
  ItemColor,
  TotalExpense,
  TotalExpenseGraph,
  Wrapper,
} from "./ExpenseSummary.styled";
import { COLORS } from "../../constants/dateConstants";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

export default function ExpenseSummary({ expenses }) {
  const { month } = useParams();
  const totalAmount = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const amounts = expenses.reduce((acc, expense) => {
    if (!acc[expense.item]) {
      acc[expense.item] = 0;
    }
    acc[expense.item] += expense.amount;
    return acc;
  }, {});
  const itemAmounts = Object.entries(amounts)
    .sort((a, b) => b[1] - a[1])
    .map(([item, amount]) => ({
      item,
      amount,
      percentage: (amount / totalAmount) * 100,
    }));

  return (
    <Wrapper>
      <TotalExpense>
        {month}월 총 지출: {formatNumberWithCommas(totalAmount)}
      </TotalExpense>
      {expenses.length > 0 && (
        <TotalExpenseGraph>
          {itemAmounts.map((item, index) => (
            <ExpenseItem
              key={index}
              $bgColor={COLORS[index]}
              $width={item.percentage}
            />
          ))}
        </TotalExpenseGraph>
      )}
      <ExpenseItemWrapper>
        {itemAmounts.map((item, index) => (
          <ExpenseItemDetail key={index}>
            <ItemColor $bgColor={COLORS[index]} />
            <p>
              {item.item}: {formatNumberWithCommas(item.amount)} (
              {item.percentage.toFixed(2)}%)
            </p>
          </ExpenseItemDetail>
        ))}
      </ExpenseItemWrapper>
    </Wrapper>
  );
}
