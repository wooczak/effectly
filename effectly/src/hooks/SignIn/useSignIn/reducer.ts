import { inputProps, actionProps, inputActions } from "./types";

export const inputsReducer = (
  state: inputProps,
  action: actionProps
): inputProps => {
  switch (action.type) {
    case inputActions.SET_UP_EMAIL_CREDENTIALS:
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
