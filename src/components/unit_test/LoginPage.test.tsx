import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../features/auth/LoginPage"; // Update the import path as per your project structure

// Mock the onSubmit function
const mockOnSubmit = jest.fn();

describe("LoginForm Component", () => {
  it("should render email field correctly", () => {
    const { getByLabelText } = render(<LoginForm onSubmit={mockOnSubmit} />);
    const emailField = getByLabelText("Email");
    expect(emailField).toBeTruthy();
  });

  it("should render password field correctly", () => {
    const { getByLabelText } = render(<LoginForm onSubmit={mockOnSubmit} />);
    const passwordField = getByLabelText("Password");
    expect(passwordField).toBeTruthy();
  });

  it("should render login button correctly", () => {
    const { getByText } = render(<LoginForm onSubmit={mockOnSubmit} />);
    const loginButton = getByText("Login");
    expect(loginButton).toBeTruthy();
  });

  it("should call onSubmit when the form is submitted with valid data", async () => {
    const { getByLabelText, getByText } = render(
      <LoginForm onSubmit={mockOnSubmit} />
    );
    const emailField = getByLabelText("Email");
    const passwordField = getByLabelText("Password");
    const loginButton = getByText("Login");

    // Fill in the form fields
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(loginButton);

    // Wait for onSubmit to be called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
