import { useState } from "react";
import FileTable from "./components/FileTable";
import NoDirectoryProvidedPlacholder from "./components/NoDirectoryProvidedPlaceholder";
import SourceDirectoryInput from "./components/SourceDirectoryInput";
import { MainContent, TitleH1 } from "./components/styles";
import { FileList } from "./types/File";

const App = () => {
  const [files, setFiles] = useState<FileList>([]);
  const tableHeaderNames = [
    "File Name/Directory Path",
    "File Size (bytes)",
    "Last Modified Date",
  ];

  return (
    <MainContent>
      <TitleH1>Directory Visualizer</TitleH1>
      <SourceDirectoryInput setFiles={setFiles} files={files} />
      {files.length > 0 ? (
        <FileTable fileList={files} tableHeaderNames={tableHeaderNames} />
      ) : (
        <NoDirectoryProvidedPlacholder />
      )}
    </MainContent>
  );
};

export default App;
