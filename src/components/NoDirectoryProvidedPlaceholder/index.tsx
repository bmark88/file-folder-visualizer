import { emptyFolder } from "../../assets/images";
import {
  EmptyFolderImage,
  NothingChosenContainer,
  NothingChosenText,
} from "./styles";

const NoDirectoryProvidedPlacholder = () => {
  return (
    <NothingChosenContainer>
      <NothingChosenText data-testid="emptyFiles">
        You haven't chosen a source folder yet!
      </NothingChosenText>
      <EmptyFolderImage alt="Empty Folder" src={emptyFolder} />
    </NothingChosenContainer>
  );
};

export default NoDirectoryProvidedPlacholder;
