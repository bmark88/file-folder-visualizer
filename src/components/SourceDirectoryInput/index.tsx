/**
 * @description Allows the user to select a source directory and upload all contents inside.
 */
import { ChangeEvent } from "react";
import { File } from "../../types/File";

interface Props {
  setFiles: (fileList: File[]) => void;
}

const SourceDirectoryInput = ({ setFiles }: Props) => {
  function selectFolder(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const uploadedFiles = e.target.files;
      console.log(uploadedFiles);

      // Since this app is small and the File type import in App.tsx is coming from a different relative file path, an error is expected.
      // @ts-expect-error
      setFiles([...uploadedFiles]);
    }
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
