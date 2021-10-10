import { useEffect, useState } from "react";
import FileTable from "./components/FileTable";
import SourceDirectoryInput from "./components/SourceDirectoryInput";
import { File } from "./types/File";

const App = () => {
  const [files, setFiles] = useState<File[]>([]);
  const tableHeaderNames = ["File Name", "File Size", "Last Modified Date"];

  useEffect(() => {
    console.log({ files });
  }, [files]);

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
