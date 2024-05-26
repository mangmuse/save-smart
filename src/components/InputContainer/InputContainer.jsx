import { MAX_DATE, MIN_DATE } from "../../constants/dateConstants";
import { Input, Label, Wrapper } from "./InputContainer.styled";

export default function InputContainer({
  onChange,
  id,
  value,
  type,
  labelText,
  placeHolder,
}) {
  const isDate = id === "date";
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeHolder}
        min={isDate ? MIN_DATE : false}
        max={isDate ? MAX_DATE : false}
      />
    </Wrapper>
  );
}
