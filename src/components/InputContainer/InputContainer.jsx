import React from "react";
import { MIN_DATE, MAX_DATE } from "../../constants/dateConstants";
import { Input, Label, Wrapper } from "./InputContainer.styled";

const InputContainer = React.forwardRef(
  (
    {
      onChange,
      id,
      value,
      type,
      labelText,
      placeHolder,
      defaultValue,
      isUncontrolled,
    },
    ref
  ) => {
    const isDate = id === "date";
    return (
      <Wrapper $isUncontrolled={isUncontrolled}>
        <Label htmlFor={id} $isUncontrolled={isUncontrolled}>
          {labelText}
        </Label>
        <Input
          id={id}
          onChange={onChange || undefined}
          value={value === undefined ? undefined : value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeHolder}
          min={isDate ? MIN_DATE : undefined}
          max={isDate ? MAX_DATE : undefined}
          ref={ref}
          $isUncontrolled={isUncontrolled}
        />
      </Wrapper>
    );
  }
);

export default InputContainer;
