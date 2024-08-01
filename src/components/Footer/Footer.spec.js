import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("react-router-dom", () => {
  return {
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  };
});

test("renders NotFound correctly and matches snapshot", async () => {
  const { asFragment, getByText } = render(<Footer />);

  // Snapshot test
  expect(asFragment()).toMatchSnapshot();

  // Content test
  expect(getByText(/Copyright 2020./)).toBeInTheDocument();
  expect(getByText(/All Rights Reserved/)).toBeInTheDocument();
  expect(getByText(/997 Hillcrest Lane/)).toBeInTheDocument();
  expect(getByText(/Irvine, CA/)).toBeInTheDocument();
  expect(getByText(/California 92714/)).toBeInTheDocument();
  expect(getByText(/Call Us: 949-833-7432/)).toBeInTheDocument();
});
