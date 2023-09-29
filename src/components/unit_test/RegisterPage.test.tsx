import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "../features/auth/RegisterPage";

describe("test register form", () => {
  const mockProps = jest.fn();

  beforeEach(() => {
    render(<RegisterPage onSubmit={mockProps} />);
  });

  test("name render correctly", async () => {
    const nameLabel = screen.getByText("Name");
    expect(nameLabel).toBeDefined();
  });

  test("email render correctly", async () => {
    const emailLabel = screen.getByText("Email");
    expect(emailLabel).toBeDefined();
  });

  test("password render correctly", async () => {
    const passwordLabel = screen.getByText("Password");
    expect(passwordLabel).toBeDefined();
  });

  test("onSubmit works correctly", async () => {
    const nameInput = screen.getByPlaceholderText("Enter Name");
    const emailInput = screen.getByPlaceholderText("Enter Email");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const registerButton = screen.getByText("Register");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, {
      target: { value: "testemail@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "Test User",
        email: "testemail@example.com",
        password: "testpassword",
      });
    });
  });
});
