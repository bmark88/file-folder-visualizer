import { useEffect, useState } from "react";
import FileTable from "./components/FileTable";
import SourceDirectoryInput from "./components/SourceDirectoryInput";
import { File } from "./types/File";

const App = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    console.log({ files });
  }, [files]);

  return (
    <>
      <SourceDirectoryInput setFiles={setFiles} />
      {files.length > 0 ? <FileTable fileList={files} /> : "No Files Exist"}
    </>
  );
};

export default App;
