/**
 * @description Performs calculations on fileList prop to provide file stat totals.
 */
import { File, FileList } from "../../types/File";

interface Props {
  fileList: FileList;
}

const TableTotals = ({ fileList }: Props) => {
  // fileSizes includes .DS_Store sizes which are automatically generated for directories
  const fileSizes = fileList.map((file: File) => file.size);
  const totalFileSize = fileSizes.reduce(
    (currSize, nextSize) => currSize + nextSize
  );

  // Totals represent all nested files and directories within the selected source directory provided by the user
  const totalFileCount = fileList.filter((file) => file.type).length;
  const totalDirectoryCount = fileList.length - totalFileCount;

  return (
    <div>
      <p>
        <label>Total # of Sub-directories:</label>{" "}
        {totalDirectoryCount.toString()}
      </p>
      <p>Total # of Files: {totalFileCount.toString()}</p>
      <p>Total File Size: {totalFileSize.toString()} bytes</p>
    </div>
  );
};

export default TableTotals;
