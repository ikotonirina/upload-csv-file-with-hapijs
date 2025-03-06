import * as React from "react";
import { describe, test } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileUpload from "../src/components/FileUpload";
import { renderWithProvider } from "./testUtils"; // Import correct

describe("FileUpload Component", () => {
  test("renders upload button", () => {
    renderWithProvider(<FileUpload />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  test("file input change triggers function", () => {
    renderWithProvider(<FileUpload />);
    const fileInput = screen.getByLabelText(
      "Upload CSV File"
    ) as HTMLInputElement;
    const file = new File(
      ["name,gender\nJohn,male\nAlice,female\n"],
      "test.csv",
      {
        type: "text/csv",
      }
    );
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(fileInput.files).toHaveLength(1);
  });
});
