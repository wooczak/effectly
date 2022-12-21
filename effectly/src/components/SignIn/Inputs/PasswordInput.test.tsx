import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

const renderPasswordInput = () => {
  render(<PasswordInput label="Password" />);
};

describe("WHEN the password input is rendered", () => {
  beforeEach(() => renderPasswordInput());

  // TODO

  /* it("THEN should render the input of password type", () => {
    expect(
      (screen.getByTestId("password-input") as HTMLInputElement).type
    ).toBe("password");
  }); */
});
