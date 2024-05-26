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
import { useMemo } from "react";

export default function ExpenseSummary({ expenses }) {
  const { month } = useParams();
  const totalAmount = useMemo(
    () =>
      expenses.reduce((total, expense) => total + Number(expense.amount), 0),
    [expenses]
  );
  const itemAmounts = useMemo(() => {
    const amounts = expenses.reduce((acc, expense) => {
      if (!acc[expense.item]) {
        acc[expense.item] = 0;
      }
      acc[expense.item] += expense.amount;
      return acc;
    }, {});
    return Object.entries(amounts)
      .sort((a, b) => b[1] - a[1])
      .map(([item, amount]) => ({
        item,
        amount,
        percentage: (amount / totalAmount) * 100,
      }));
  }, [expenses, totalAmount]);

  return (
    <Wrapper>
      <TotalExpense>
        {month}월 총 지출: {formatNumberWithCommas(totalAmount)}
      </TotalExpense>
      {
        <TotalExpenseGraph>
          {itemAmounts.map((item, index) => (
            <ExpenseItem
              key={index}
              $bgColor={COLORS[index]}
              $width={item.percentage}
            />
          ))}
        </TotalExpenseGraph>
      }
      <ExpenseItemWrapper>
        {itemAmounts.length > 0 &&
          itemAmounts.map((item, index) => (
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
