interface Props {
  tableHeaderNames: string[];
}

const TableHead = ({ tableHeaderNames }: Props) => {
  return (
    <thead>
      <tr>
        {tableHeaderNames.map((name) => (
          <td key={name}>{name}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
