import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "../../../core/style/theme/theme";
import PasswordInput from "./PasswordInput";

type componentProps = {
  label: string;
};

const testProps = {
  label: "test-label",
};

const renderComponent = ({ label }: componentProps) => {
  const ref = React.createRef();
  render(
    <ThemeProvider theme={darkTheme}>
      <PasswordInput ref={ref} label={label} />
    </ThemeProvider>
  );
};

describe("WHEN the password input is rendered", () => {
  it("THEN should have a password input type set as <password> as default", () => {
    renderComponent({ ...testProps });
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;

    expect(passwordInput.type).toBe("password");
  });

  describe("AND when the password eye is clicked on", () => {
    it("THEN should have a password input type set as text", () => {
      renderComponent({ ...testProps });
      const passwordEye = screen.getByTestId("password-eye");
      const passwordInput = screen.getByTestId(
        "password-input"
      ) as HTMLInputElement;

      fireEvent.click(passwordEye);

      expect(passwordInput.type).toBe("text");
    });
  });
});
