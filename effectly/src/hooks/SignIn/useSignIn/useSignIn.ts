import { FormEvent, useReducer, useRef } from "react";
import { auth } from "../../../core/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useCurrentUser from "../../global/useCurrentUser";
import { inputActions } from "./types";
import { inputsReducer, initialState } from "./reducer";

const useSignIn = () => {
  const [inputState, dispatch] = useReducer(inputsReducer, initialState);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  useCurrentUser();

  const handleEmailFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = inputState;
    const credentialsAreSet = email !== "" && password !== "";

    e.preventDefault();

    dispatch({
      type: inputActions.SET_UP_EMAIL_CREDENTIALS,
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

  return { emailInput, passwordInput, handleEmailFormSubmit };
};

export default useSignIn;
