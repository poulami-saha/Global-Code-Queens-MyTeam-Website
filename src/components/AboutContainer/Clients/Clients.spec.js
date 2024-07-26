import React from "react";
import { render } from "@testing-library/react";
import Clients from "./Clients";

test("renders NotFound correctly and matches snapshot", async () => {
  const { asFragment, getByText } = render(<Clients />);

  // Snapshot test
  expect(asFragment()).toMatchSnapshot();

  // Content test
  expect(getByText(/Some of our clients/)).toBeInTheDocument();
});
