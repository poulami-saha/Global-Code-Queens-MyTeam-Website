import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("FormComponent", () => {
  const originalConsoleLog = console.log;
  const consoleLogMock = jest.fn();

  beforeAll(() => {
    console.log = consoleLogMock;
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  afterEach(() => {
    consoleLogMock.mockClear();
  });

  test("renders ContactForm correctly and matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    // Snapshot test
    expect(asFragment()).toMatchSnapshot();

    // Check if form fields are rendered
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email Address");
    const company = screen.getByPlaceholderText("Company Name");
    const title = screen.getByPlaceholderText("Title");
    const message = screen.getByPlaceholderText("Message");

    const selectors = [name, email, company, title, message];
    selectors.map((selector) => expect(selector).toBeInTheDocument());
  });

  test("submits Contact Form with Data", () => {
    render(<ContactForm />);
    // Check if form fields are rendered
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email Address");
    const company = screen.getByPlaceholderText("Company Name");
    const title = screen.getByPlaceholderText("Title");
    const message = screen.getByPlaceholderText("Message");

    const submitButton = screen.getByText("submit");

    expect(submitButton).toBeDisabled();

    fireEvent.change(name, { target: { value: "Person" } });
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(company, { target: { value: "Test Gmbh" } });
    fireEvent.change(title, { target: { value: "Software Engineer" } });
    fireEvent.change(message, { target: { value: "We need support" } });

    fireEvent.click(submitButton);

    const expected = {
      companyName: {
        error: "",
        placeholder: "Company Name",
        touched: true,
        type: "text",
        value: "Test Gmbh",
      },
      email: {
        error: "",
        placeholder: "Email Address",
        touched: true,
        type: "text",
        value: "test@gmail.com",
      },
      message: {
        error: "",
        placeholder: "Message",
        touched: true,
        type: "textarea",
        value: "We need support",
      },
      name: {
        error: "",
        placeholder: "Name",
        touched: true,
        type: "text",
        value: "Person",
      },
      title: {
        error: "",
        placeholder: "Title",
        touched: true,
        type: "text",
        value: "Software Engineer",
      },
    };

    expect(consoleLogMock).toHaveBeenCalledWith(`formData${expected}`);
  });

  test("generate Form submission error on all mandatory fields", () => {
    const handleSubmit = jest.fn();
    render(<ContactForm />);
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email Address");
    const company = screen.getByPlaceholderText("Company Name");
    const title = screen.getByPlaceholderText("Title");
    const message = screen.getByPlaceholderText("Message");

    const submitButton = screen.getByText("submit");

    fireEvent.blur(name);
    fireEvent.blur(email);
    fireEvent.blur(company);
    fireEvent.blur(title);
    fireEvent.blur(message);

    fireEvent.click(submitButton);

    const generalError = screen.getAllByText(/This field is required/);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(generalError.length).toEqual(5);
  });

  test("generate Form submission error on invalid email", () => {
    render(<ContactForm />);
    const email = screen.getByPlaceholderText("Email Address");

    fireEvent.change(email, { target: { value: "test" } });
    fireEvent.blur(email);

    const emailError = screen.getByText(/Invalid email address/);
    expect(emailError).toBeInTheDocument();
  });

  test("generate Form submission error on invalid message length", () => {
    render(<ContactForm />);
    const message = screen.getByPlaceholderText("Message");

    fireEvent.change(message, { target: { value: "test message" } });
    fireEvent.blur(message);

    const messageError = screen.getByText(
      /Message must be at least 25 characters/
    );
    expect(messageError).toBeInTheDocument();
  });
});
