import styled, { css } from "styled-components";

export const FileItemRow = styled.tr<{ isDirectory: boolean }>`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);
  align-items: center;

  ${(props) =>
    props.isDirectory &&
    css`
      border: dotted 2px #000;
    `};

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (min-width: 768px) {
    display: table-row;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);
  }

  td {
    min-width: 300px;

    @media screen and (min-width: 768px) {
      min-width: unset;

      span {
        display: none;
      }
    }
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    && {
      td {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
`;

export const TableContainerWrapper = styled.div`
  max-height: 70vh;
  overflow-y: hidden;
  overflow-y: scroll;
  padding: 0 10px;
`;

export const TableBodyContainer = styled.tbody``;

export const TableBodyData = styled.td`
  font-size: 1.3rem;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    padding: 10px 0;

    label {
      display: none;
    }
  }
`;

export const MobileItemTitleData = styled(TableBodyData)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TableHeadContainer = styled.thead`
  display: none;

  @media screen and (min-width: 768px) {
    display: table-header-group;
  }
`;

export const TableHeaderRow = styled.tr`
  background-color: #8fd65b;

  td {
    padding: 20px 0;
  }
`;

export const TableHeaderData = styled.td`
  font-size: 1.6rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const BoldSpan = styled.span<{ fontWeight?: number }>`
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: 1.4rem;
`;

export const FileDetailText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100vw - 26px);
  white-space: nowrap;
`;

export const TotalDetailsContainer = styled.div`
  padding: 25px;
  max-width: 500px;
  margin: 20px auto 0;
  border-top: solid 2px #000;
`;

export const TotalDetailText = styled.p`
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`;
