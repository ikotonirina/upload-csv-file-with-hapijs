import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/store";

export const renderWithProvider = (ui: React.ReactElement): RenderResult =>
  render(<Provider store={store}>{ui}</Provider>);
