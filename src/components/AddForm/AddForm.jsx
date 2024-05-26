import { useState } from "react";
import { v4 as uuid } from "uuid";
// import { useValidate } from "../hooks/useValidate";
import { checkValidate } from "../../utils/checkValidate";
import { MAX_DATE, MIN_DATE } from "../../constants/dateConstants";
import { Wrapper } from "./AddForm.styled";
import InputContainer from "../Input/InputContainer";
import { SubmitBtn } from "../SubmitBtn/SubmitBtn.styled";

export default function AddForm({ onAdd }) {
  const initialFormState = {
    date: "",
    item: "",
    amount: "",
    description: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidate(formState)) {
      alert("asd");
      return;
    }
    const newExpense = {
      id: uuid(),
      ...formState,
      amount: parseFloat(formState.amount),
    };
    onAdd(newExpense);
    setFormState(initialFormState);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputContainer
        onChange={handleChange}
        id="date"
        value={formState.date}
        type="date"
        labelText="날짜"
      />
      <InputContainer
        onChange={handleChange}
        id="item"
        value={formState.item}
        type="text"
        labelText="항목"
      />
      <InputContainer
        onChange={handleChange}
        id="amount"
        value={formState.amount}
        type="number"
        labelText="금액"
      />
      <InputContainer
        onChange={handleChange}
        id="description"
        value={formState.description}
        type="text"
        labelText="내용"
      />

      <SubmitBtn>저장</SubmitBtn>
    </Wrapper>
  );
}
