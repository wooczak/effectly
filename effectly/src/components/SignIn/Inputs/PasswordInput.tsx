import React, { useState } from "react";
import { Input, Label, PasswordEye } from "./Inputs.styles";
import HiddenPasswordIcon from "../../../assets/icons/ShowPassword.svg";
import ShownPasswordIcon from "../../../assets/icons/HidePassword.svg";

type InputProps = {
  label: string;
};

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((value) => !value);

    return (
      <div style={{ position: "relative" }}>
        <Label>
          <p>{props.label}</p>
        </Label>
        <Input
          data-testid="password-input"
          type={!showPassword ? "password" : "text"}
          id="password"
          ref={ref}
          required
        />
        <PasswordEye
          src={!showPassword ? HiddenPasswordIcon : ShownPasswordIcon}
          alt={`An icon displaying that password is ${
            !showPassword ? "hidden" : "shown"
          }`}
          onClick={togglePasswordVisibility}
        />
      </div>
    );
  }
);

export default PasswordInput;
