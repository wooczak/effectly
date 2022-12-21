import React from "react";
import { Input, Label } from "./Inputs.styles";

type InputProps = {
  label: string;
};

const MailInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <>
        <Label>
          <p>{props.label}</p>
        </Label>
        <Input
          type="email"
          id="email"
          required
          ref={ref}
        />
      </>
    );
  }
);

export default MailInput;
