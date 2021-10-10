import styled from "styled-components";

export const FileItemContainer = styled.tr<{ isDirectory: boolean }>`
  background-color: ${(props) => (props.isDirectory ? "#C0C5D1" : "#fff")};
`;
