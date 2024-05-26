import React, { useRef, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { checkValidate } from "../utils/checkValidate";
import { MIN_DATE, MAX_DATE } from "../constants/dateConstants";

export default function EditExpense() {
  const navigate = useNavigate();
  const { expenses, handleDeleteExpense, handleUpdateExpense } =
    useOutletContext();
  const { productId } = useParams();

  const refs = useRef({
    date: null,
    item: null,
    amount: null,
    description: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formState = {
      id: productId,
      date: refs.current.date.value,
      item: refs.current.item.value,
      amount: refs.current.amount.value,
      description: refs.current.description.value,
    };

    if (!checkValidate(formState)) {
      alert("asd");
      return;
    }
    handleUpdateExpense(formState);
    navigate("/");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleDeleteExpense(productId);
    navigate("/");
  };

  useEffect(() => {
    const foundExpense = expenses.find((exp) => exp.id === productId);
    if (!foundExpense) {
      navigate("/");
      return;
    } else {
      const { date, item, amount, description } = refs.current;
      date.value = foundExpense.date;
      item.value = foundExpense.item;
      amount.value = foundExpense.amount;
      description.value = foundExpense.description;
    }
  }, [expenses, productId, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">날짜</label>
      <input
        name="date"
        min={MIN_DATE}
        max={MAX_DATE}
        ref={(el) => (refs.current.date = el)}
        id="date"
        type="date"
      />
      <label htmlFor="item">아이템</label>
      <input
        name="item"
        ref={(el) => (refs.current.item = el)}
        id="item"
        type="text"
      />
      <label htmlFor="amount">어마운트</label>
      <input
        name="amount"
        ref={(el) => (refs.current.amount = el)}
        id="amount"
        type="number"
      />
      <label htmlFor="description">디스크립션</label>
      <input
        name="description"
        ref={(el) => (refs.current.description = el)}
        id="description"
        type="text"
      />
      <button type="submit">저장</button>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button" onClick={() => navigate("/")}>
        뒤로가기
      </button>
    </form>
  );
}
