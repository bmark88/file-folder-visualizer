/**
 * @description Uses the fileList prop and sorts the files by size in ascending order prior to rendering.
 */
import moment from "moment";
import { File, FileList } from "../../types/File";
import {
  TableBodyContainer,
  TableBodyData,
  FileItemRow,
  MobileItemTitleData,
  BoldSpan,
  FileDetailText,
} from "./styles";

interface Props {
  fileList: FileList;
}

const TableBody = ({ fileList }: Props) => {
  const sortedFileList = fileList.sort((a, b) => a.size - b.size);
  const dateFormat = "ddd MMM, YYYY - hh:mm A";

  return (
    <TableBodyContainer>
      {sortedFileList.map((file: File) => (
        <FileItemRow key={file.webkitRelativePath} isDirectory={!file.type}>
          {/** Mobile component hidden on screen size 768px and up */}
          <MobileItemTitleData>
            <FileDetailText>
              <BoldSpan fontWeight={700}>Details for:</BoldSpan>{" "}
              {!file.type ? file.webkitRelativePath : file.name}
            </FileDetailText>{" "}
          </MobileItemTitleData>

          <TableBodyData>
            <BoldSpan>{!file.type ? "Directory Path" : "File Name"}:</BoldSpan>{" "}
            {!file.type ? "*" + file.webkitRelativePath : file.name}
          </TableBodyData>
          <TableBodyData>
            <BoldSpan>File Size:</BoldSpan> {file.size}
          </TableBodyData>
          <TableBodyData>
            <BoldSpan>Last Modified Date:</BoldSpan>{" "}
            {moment(file.lastModifiedDate).format(dateFormat)}
          </TableBodyData>
        </FileItemRow>
      ))}
    </TableBodyContainer>
  );
};

export default TableBody;
