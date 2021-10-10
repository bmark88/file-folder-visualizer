import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Files", () => {
  it("Notifies the user no files exist if files array is empty", () => {
    render(<App />);
    const emptyFilesText = screen.getByText(
      "You haven't chosen a source folder yet!"
    );
    expect(emptyFilesText).toBeInTheDocument();
  });
});
