import styled from "styled-components";

export const FileItemContainer = styled.tr<{ isDirectory: boolean }>`
  border: solid 1px red;
  background-color: ${(props) => (props.isDirectory ? "#C0C5D1" : "#fff")};
  /* display: flex; */
`;
