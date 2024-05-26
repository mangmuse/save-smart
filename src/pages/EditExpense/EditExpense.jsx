import React, { useRef, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { checkValidate } from "../../utils/checkValidate";
import { BtnContainer, Wrapper } from "./EditExpense.styled";
import { Button } from "../../components/Button/Button.styled";
import InputContainer from "../../components/\bInputContainer/InputContainer";

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
    navigate(-1);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const currentDescription = refs.current.description.value;
    const description = prompt(
      `삭제할 내용을 입력해주세요 "${currentDescription}"`
    );
    if (description !== currentDescription) {
      alert("asd");
      return;
    }
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
    <Wrapper onSubmit={handleSubmit}>
      <InputContainer
        id="date"
        type="date"
        labelText="날짜"
        ref={(el) => (refs.current.date = el)}
        isUncontrolled
      />
      <InputContainer
        id="item"
        type="text"
        labelText="항목"
        ref={(el) => (refs.current.item = el)}
        isUncontrolled
      />
      <InputContainer
        id="amount"
        type="number"
        labelText="금액"
        ref={(el) => (refs.current.amount = el)}
        isUncontrolled
      />
      <InputContainer
        id="description"
        type="text"
        labelText="내용"
        ref={(el) => (refs.current.description = el)}
        isUncontrolled
      />
      <BtnContainer>
        <Button type="submit" $btnType="submit">
          저장
        </Button>
        <Button type="button" $btnType="delete" onClick={handleDelete}>
          삭제
        </Button>
        <Button type="button" $btnType="go-back" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </BtnContainer>
    </Wrapper>
  );
}
