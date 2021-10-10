import { File } from "../../types/File";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableTotals from "./TableTotals";

interface Props {
  fileList: File[];
  tableHeaderNames: string[];
}

const FileTable = ({ fileList, tableHeaderNames }: Props) => {
  return (
    <>
      <table>
        <TableHead tableHeaderNames={tableHeaderNames} />
        <TableBody fileList={fileList} />
      </table>
      <TableTotals fileList={fileList} />
    </>
  );
};

export default FileTable;
