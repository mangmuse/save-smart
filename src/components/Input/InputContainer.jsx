import { Input, Label, Wrapper } from "./InputContainer.styled";

export default function InputContainer({
  onChange,
  id,
  value,
  type,
  labelText,
}) {
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Input id={id} onChange={onChange} value={value} type={type} />
    </Wrapper>
  );
}
