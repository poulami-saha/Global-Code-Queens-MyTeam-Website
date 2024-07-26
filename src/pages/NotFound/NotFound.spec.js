import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders NotFound correctly and matches snapshot", async () => {
  const { asFragment, getByText } = render(<NotFound />);

  // Snapshot test
  expect(asFragment()).toMatchSnapshot();

  // Content test
  expect(getByText("Page not found")).toBeInTheDocument();
  expect(
    getByText(/We can’t seem to find the page you’re looking for./)
  ).toBeInTheDocument();
  expect(getByText(/Try going back to the previous page./)).toBeInTheDocument();
});
