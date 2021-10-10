import { useState } from "react";
import FileTable from "./components/FileTable";
import SourceDirectoryInput from "./components/SourceDirectoryInput";
import { TitleH1 } from "./components/styles";
import { FileList } from "./types/File";

const App = () => {
  const [files, setFiles] = useState<FileList>([]);
  const tableHeaderNames = [
    "File Name/Directory Path",
    "File Size",
    "Last Modified Date",
  ];

  return (
    <>
      <TitleH1>Directory Visualizer</TitleH1>
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
