import { Fragment } from "react";
import { File } from "../../types/File";
import { FileItemContainer } from "./styles";

interface Props {
  fileList: File[];
}

const FileTable = ({ fileList }: Props) => {
  const tableHeaderNames = ["File Name", "File Size", "Last Modified Date"];

  // fileSizes includes .DS_Store sizes which are automatically generated for directories
  const fileSizes = fileList.map((file) => file.size);
  const totalFileSize = fileSizes.reduce(
    (currSize, nextSize) => currSize + nextSize
  );

  // Totals represent all nested files and directories within the selected source directory provided by the user
  const totalFileCount = fileList.filter((file) => file.type).length;
  const totalDirectoryCount = fileList.length - totalFileCount;

  const memoizedFileList = fileList;
  const sortedFileList = memoizedFileList.sort((a, b) => a.size - b.size);

  console.log({
    fileSizes,
    totalFileSize,
    sortedFileList,
  });

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            {tableHeaderNames.map((name) => (
              <td key={name}>{name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedFileList.map((file) => (
            <FileItemContainer
              key={file.webkitRelativePath}
              isDirectory={!file.type}
            >
              {console.log({ file })}
              <td>
                {file.name === ".DS_Store"
                  ? file.webkitRelativePath
                  : file.name}
              </td>
              <td>{file.size}</td>
              <td>{file.lastModifiedDate.toString()}</td>
            </FileItemContainer>
          ))}
        </tbody>
      </table>
      <div>
        <p>
          <label>Total # of Sub-directories:</label>{" "}
          {totalDirectoryCount.toString()}
        </p>
        <p>Total # of Files: {totalFileCount.toString()}</p>
        <p>Total File Size: {totalFileSize.toString()} bytes</p>
      </div>
    </Fragment>
  );
};

export default FileTable;

// - the app should list the folders and files in a source folder.
// - the list should be ordered by size, and it should return the size and the last modification date of each element. Also, a count of the files and the total size should be provided.
// - the app should provide a UI to choose the folder and show the result

// - UI should consume an API

// - the app should be production-ready. (no need to do everything,  you could list what left to be prod-ready)
