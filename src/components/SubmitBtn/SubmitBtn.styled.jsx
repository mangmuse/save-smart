import styled from "styled-components";

export const SubmitBtn = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }
`;
