/**
 * @description Performs calculations on fileList prop to provide file stat totals.
 */
import { File, FileList } from "../../types/File";
import { BoldSpan, TotalDetailsContainer, TotalDetailText } from "./styles";

interface Props {
  fileList: FileList;
}

const TableTotals = ({ fileList }: Props) => {
  // fileSizes includes .DS_Store sizes which are automatically generated for directories
  const fileSizes = fileList.map((file: File) => file.size);
  const totalFileSize = fileSizes.reduce(
    (currSize, nextSize) => currSize + nextSize
  );

  // Totals represent all nested files and directories within the selected source directory provided by the user
  const totalFileCount = fileList.filter((file) => file.type).length;
  const totalDirectoryCount = fileList.length - totalFileCount;

  const detailItems = [
    {
      titleText: "Total # of Sub-directories:",
      valueText: totalDirectoryCount.toString(),
    },
    {
      titleText: "Total # of Files:",
      valueText: totalFileCount.toString(),
    },
    {
      titleText: "Total File Size:",
      valueText: `${totalFileSize.toString()} bytes`,
    },
  ];

  return (
    <TotalDetailsContainer>
      {detailItems.map((item) => (
        <TotalDetailText>
          <BoldSpan fontWeight={600}>{item.titleText}</BoldSpan>{" "}
          {item.valueText}
        </TotalDetailText>
      ))}
    </TotalDetailsContainer>
  );
};

export default TableTotals;
