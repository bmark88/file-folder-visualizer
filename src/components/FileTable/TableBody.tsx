import { File } from "../../types/File";
import { FileItemContainer } from "./styles";

interface Props {
  fileList: File[];
}

const TableBody = ({ fileList }: Props) => {
  const memoizedFileList = fileList;
  const sortedFileList = memoizedFileList.sort((a, b) => a.size - b.size);

  return (
    <tbody>
      {sortedFileList.map((file) => (
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
