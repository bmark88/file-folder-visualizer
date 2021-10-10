/**
 * @description Allows the user to select a source directory and updates the files state with all content inside (files and directories).
 */
import { ChangeEvent } from "react";
import { File, FileList } from "../../types/File";
import {
  StyledLabel,
  HiddenInputWrapper,
  InputContainer,
} from "../SourceDirectoryInput/styles";

interface Props {
  setFiles: (fileList: File[]) => void;
  files: FileList;
}

const SourceDirectoryInput = ({ setFiles, files }: Props) => {
  function selectFolder(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const uploadedFiles = e.target.files;

      // Since this app is small and the File type import in App.tsx is coming from a different relative file path, an error is expected.
      // @ts-expect-error
      setFiles([...uploadedFiles]);
    }
  }

  return (
    <InputContainer>
      <StyledLabel htmlFor="fileUpload">
        {files.length === 0 ? "Choose" : "Change"} SRC Directory
      </StyledLabel>
      <HiddenInputWrapper>
        <input
          id="fileUpload"
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
      </HiddenInputWrapper>
    </InputContainer>
  );
};

export default SourceDirectoryInput;
