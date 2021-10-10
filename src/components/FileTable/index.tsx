/**
 * @description Renders a table element that displays a breakdown of file stats including:
 * 1. File Name
 * 2. File Size
 * 3. Last Modified Date
 * 4. Total counts for files and sub-directories
 * 5. Total file size including hidden files such as .DS_Store
 */
import { FileList } from "../../types/File";
import { TableContainer, TableContainerWrapper } from "./styles";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableTotals from "./TableTotals";

interface Props {
  fileList: FileList;
  tableHeaderNames: string[];
}

const FileTable = ({ fileList, tableHeaderNames }: Props) => {
  return (
    <>
      <TableContainerWrapper>
        <TableContainer>
          <TableHead tableHeaderNames={tableHeaderNames} />
          <TableBody fileList={fileList} />
        </TableContainer>
      </TableContainerWrapper>
      <TableTotals fileList={fileList} />
    </>
  );
};

export default FileTable;
