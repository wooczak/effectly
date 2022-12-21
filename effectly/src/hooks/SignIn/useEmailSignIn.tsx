import { useReducer, useRef, useEffect } from "react";

export enum inputActions {
  SET_UP_CREDENTIALS = "SET_UP_CREDENTIALS",
}

type inputProps = {
  email: string | undefined;
  password: string | undefined;
};

type actionProps = {
  type: inputActions;
  email?: string;
  password?: string;
};

export const inputsReducer = (
  state: inputProps,
  action: actionProps
): inputProps => {
  switch (action.type) {
    case inputActions.SET_UP_CREDENTIALS:
      console.log("set up credentials");
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
  }
};

export const initialState: inputProps = {
  email: "",
  password: "",
};

const useEmailSignIn = () => {
  const [inputState, dispatch] = useReducer(inputsReducer, initialState);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleFormSubmit = () => {
    dispatch({
      type: inputActions.SET_UP_CREDENTIALS,
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    });
  };

  useEffect(() => {
    console.log(inputState);
  }, [inputState]);

  return { emailInput, passwordInput, handleFormSubmit };
};

export default useEmailSignIn;
