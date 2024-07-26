import React from "react";
import { render } from "@testing-library/react";
import AboutDetails from "./AboutDetails";

test("renders NotFound correctly and matches snapshot", async () => {
  const { asFragment, getByText } = render(<AboutDetails />);

  // Snapshot test
  expect(asFragment()).toMatchSnapshot();

  // Content test
  expect(
    getByText(
      /We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you./
    )
  ).toBeInTheDocument();
});
