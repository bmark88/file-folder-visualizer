import { TableHeadContainer, TableHeaderRow, TableHeaderData } from "./styles";

interface Props {
  tableHeaderNames: string[];
}

const TableHead = ({ tableHeaderNames }: Props) => {
  return (
    <TableHeadContainer>
      <TableHeaderRow>
        {tableHeaderNames.map((name) => (
          <TableHeaderData key={name}>{name}</TableHeaderData>
        ))}
      </TableHeaderRow>
    </TableHeadContainer>
  );
};

export default TableHead;
