import { render, screen } from "@testing-library/react";
import App from "../App";
import TableBody from "../components/FileTable/TableBody";
import TableHead from "../components/FileTable/TableHead";
import TableTotals from "../components/FileTable/TableTotals";
import NoDirectoryProvidedPlacholder from "../components/NoDirectoryProvidedPlaceholder";

describe("Files", () => {
  it("Renders NothingChosenText if the file list is empty", () => {
    render(<App />);
    const emptyFilesText = screen.getByTestId("emptyFiles");
    expect(emptyFilesText).toBeInTheDocument();
  });

  it("Renders table header items", () => {
    render(<TableHead tableHeaderNames={["Header 1", "Header 2"]} />);

    const headerText1 = screen.getByText("Header 1");
    const headerText2 = screen.getByText("Header 2");
    expect(headerText1).toBeInTheDocument();
    expect(headerText2).toBeInTheDocument();
  });

  it("Renders all files in a given fileList array", () => {
    const currentDate = new Date();
    const files = [
      {
        lastModified: 123456790,
        lastModifiedDate: currentDate,
        name: "file name",
        size: 456,
        type: "type",
        webkitRelativePath: "webkitRelativePath1",
      },
      {
        lastModified: 123456790,
        lastModifiedDate: currentDate,
        name: "hello world",
        size: 456,
        type: "type",
        webkitRelativePath: "webkitRelativePath2",
      },
      {
        lastModified: 123456790,
        lastModifiedDate: currentDate,
        name: "test name",
        size: 456,
        type: "type",
        webkitRelativePath: "webkitRelativePath3",
      },
    ];

    render(<TableBody fileList={files} />);

    const fileName = screen.getAllByTestId("fileName");
    expect(fileName.length).toEqual(3);
  });

  it("Calculates the correct file total size", () => {
    const currentDate = new Date();
    const files = [
      {
        lastModified: 123456790,
        lastModifiedDate: currentDate,
        name: "size100",
        size: 100,
        type: "type",
        webkitRelativePath: "webkitRelativePath4",
      },
      {
        lastModified: 123456790,
        lastModifiedDate: currentDate,
        name: "size200",
        size: 200,
        type: "type",
        webkitRelativePath: "webkitRelativePath5",
      },
    ];
    render(<TableTotals fileList={files} />);

    const totalBytes = screen.getByText("300 bytes");
    expect(totalBytes).toBeInTheDocument();
  });
});

describe("Accessibility", () => {
  it("Renders alt text for placeholder image", () => {
    render(<NoDirectoryProvidedPlacholder />);

    const emptyFolderAltText = screen.getByAltText("Empty Folder");
    expect(emptyFolderAltText).toBeInTheDocument();
  });
});
