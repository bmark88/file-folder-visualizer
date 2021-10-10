import { File } from "../../types/File";

interface Props {
  fileList: File[];
}

const FileTable = ({ fileList }: Props) => {
  return (
    <div>
      {fileList.map((file) => (
        <>
          {console.log({ file })}
          <div>lastModified: {file.lastModified}</div>
          <div>lastModifiedDate: {file.lastModifiedDate.toString()}</div>
          <div>name: {file.name}</div>
          <div>size: {file.size}</div>
          <div>type: {file.type}</div>
          <div>webkitRelativePath: {file.webkitRelativePath}</div>
        </>
      ))}
    </div>
  );
};

export default FileTable;

// - the app should list the folders and files in a source folder.
// - the list should be ordered by size, and it should return the size and the last modification date of each element. Also, a count of the files and the total size should be provided.
// - the app should provide a UI to choose the folder and show the result

// - UI should consume an API

// - the app should be production-ready. (no need to do everything,  you could list what left to be prod-ready)
