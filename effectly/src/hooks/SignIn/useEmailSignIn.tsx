import { FormEvent, useReducer, useRef, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../global/useCurrentUser";
import { useDispatch } from "react-redux";
import { login } from "../../store/users/userSlice";

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

  useCurrentUser();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = inputState;
    const credentialsAreSet = email !== "" && password !== "";

    e.preventDefault();

    dispatch({
      type: inputActions.SET_UP_CREDENTIALS,
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    });

    if (credentialsAreSet) {
      try {
        const signInResponse = await signInWithEmailAndPassword(
          auth,
          email as string,
          password as string
        );
        if (signInResponse.user) {
          clearFormInputs();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const clearFormInputs = () => {
    emailInput.current!.value = "";
    passwordInput.current!.value = "";
  };

  return { emailInput, passwordInput, handleFormSubmit };
};

export default useEmailSignIn;
