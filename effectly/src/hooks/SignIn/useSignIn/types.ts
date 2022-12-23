export enum inputActions {
  SET_UP_EMAIL_CREDENTIALS = "SET_UP_EMAIL_CREDENTIALS",
}

export type inputProps = {
  email: string | undefined;
  password: string | undefined;
};

export type actionProps = {
  type: inputActions;
  email?: string;
  password?: string;
};