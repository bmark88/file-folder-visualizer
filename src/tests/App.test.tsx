import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Files", () => {
  it("Notifies the user no files exist if files array is empty", () => {
    render(<App />);
    const emptyFilesText = screen.getByText("No Files Exist");
    expect(emptyFilesText).toBeInTheDocument();
  });
});
