import { useState } from "react";
import FileTable from "./components/FileTable";
import SourceDirectoryInput from "./components/SourceDirectoryInput";
import { FileList } from "./types/File";

const App = () => {
  const [files, setFiles] = useState<FileList>([]);
  const tableHeaderNames = ["File Name", "File Size", "Last Modified Date"];

  return (
    <>
      <SourceDirectoryInput setFiles={setFiles} />
      {files.length > 0 ? (
        <FileTable fileList={files} tableHeaderNames={tableHeaderNames} />
      ) : (
        "No Files Exist"
      )}
    </>
  );
};

export default App;
