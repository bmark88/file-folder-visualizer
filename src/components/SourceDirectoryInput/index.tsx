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
    <div>
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
      Source Directory Input
    </div>
  );
};

export default SourceDirectoryInput;
