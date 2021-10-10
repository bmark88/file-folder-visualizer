/**
 * @description Uses the fileList prop and sorts the files by size in ascending order prior to rendering.
 */
import { File, FileList } from "../../types/File";
import { FileItemContainer } from "./styles";

interface Props {
  fileList: FileList;
}

const TableBody = ({ fileList }: Props) => {
  const sortedFileList = fileList.sort((a, b) => a.size - b.size);

  return (
    <tbody>
      {sortedFileList.map((file: File) => (
        <FileItemContainer
          key={file.webkitRelativePath}
          isDirectory={!file.type}
        >
          <td>
            {file.name === ".DS_Store" ? file.webkitRelativePath : file.name}
          </td>
          <td>{file.size}</td>
          <td>{file.lastModifiedDate.toString()}</td>
        </FileItemContainer>
      ))}
    </tbody>
  );
};

export default TableBody;
