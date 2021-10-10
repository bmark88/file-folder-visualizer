import { TableHeadContainer, TableHeaderData } from "./styles";

interface Props {
  tableHeaderNames: string[];
}

const TableHead = ({ tableHeaderNames }: Props) => {
  return (
    <TableHeadContainer>
      <tr>
        {tableHeaderNames.map((name) => (
          <TableHeaderData key={name}>{name}</TableHeaderData>
        ))}
      </tr>
    </TableHeadContainer>
  );
};

export default TableHead;
