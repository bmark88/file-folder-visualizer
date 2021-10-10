import { File } from "../../types/File";

interface Props {
  setFiles: (fileList: File[]) => void;
}

const SourceDirectoryInput = ({ setFiles }: Props) => {
  function selectFolder(e: any) {
    const uploadedFiles = e.target.files;
    setFiles([...uploadedFiles]);
  }

  return (
    <input
      type="file"
      onChange={(event) => selectFolder(event)}
      // @ts-expect-error
      directory="true"
      webkitdirectory="true"
      mozdirectory="true"
      msdirectory="true"
      odirectory="true"
      multiple
    />
  );
};

export default SourceDirectoryInput;
