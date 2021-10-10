/**
 * @description Allows the user to select a source directory and updates the files state with all content inside (files and directories).
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
