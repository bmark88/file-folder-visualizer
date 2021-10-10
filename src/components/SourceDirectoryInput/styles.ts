import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  all: unset;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  background-color: #8fd65b;
  cursor: pointer;
  min-width: 150px;
  text-align: center;
`;

export const HiddenInputWrapper = styled.div`
  // Hide input contents while maintaining accessibility standards
  input {
    width: 1px;
    height: 1px;
    transform: translateX(-1px);
  }
`;
