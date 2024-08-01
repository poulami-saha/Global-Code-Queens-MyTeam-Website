import { render, fireEvent, screen, within } from "@testing-library/react";
import Directors from "./Directors";
import { directors } from "./directorsData";

test("renders Directors section correctly and matches snapshot", async () => {
  const { asFragment } = render(<Directors />);

  // Snapshot test
  expect(asFragment()).toMatchSnapshot();

  // Content test
  expect(screen.getByText(/Meet the directors/)).toBeInTheDocument();
});

test("renders each director's name and title correctly", () => {
  render(<Directors />);

  directors.forEach((director) => {
    const { name, title } = director;

    const profileCard = screen.getByTestId(`profile-card-${name}`);
    const { getByText } = within(profileCard);

    // Content test
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
  });
});

test("renders each director's name and quote when button is clicked", () => {
  render(<Directors />);

  directors.forEach((director) => {
    const { name, quote } = director;

    const profileCard = screen.getByTestId(`profile-card-${name}`);

    const { getByRole, getByText } = within(profileCard);

    const button = getByRole("button");
    fireEvent.click(button);

    // Content test
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(`"${quote}"`)).toBeInTheDocument();
  });
});
