export const Globals = {
  EFFECTLY: "effectly",
  LOADING: "Loading...",
  LOG_OUT: "Log out",
};

export enum Calendar {
  NO_EVENTS_ADDED = "Oops. No events added yet!",
  TODAY = "Today, ",
  EVENT_NAME_LABEL = "Event",
  ALL_DAY_LABEL = "All day",
  START_TIME_LABEL = "Start time",
  END_TIME_LABEL = "End time",
  CATEGORY_LABEL = "Category (optional)",
  CATEGORY_NAME_LABEL = "Category name",
  START_TIME_INPUT = "START_TIME",
  END_TIME_INPUT = "END_TIME",
  ADD_NEW_EVENT = "Add new event",
  DONE = "Done",
}

export enum EventDetailsReducerActions {
  TOGGLE_IS_ALL_DAY = "TOGGLE_IS_ALL_DAY",
  SET_EVENT_TIME_START = "SET_EVENT_TIME_START",
  SET_EVENT_TIME_END = "SET_EVENT_TIME_END",
  SET_EVENT_DATE_START = "SET_EVENT_DATE_START",
  SET_EVENT_DATE_END = "SET_EVENT_DATE_END",
  SET_CATEGORY = "SET_CATEGORY",
  SET_EVENT_NAME = "SET_EVENT_NAME",
}

export const ID = 'ID';
export const CLASS = 'CLASS'

export const SignIn = {
  GOOGLE: {
    ALT: "Google Logo",
    TEXT: "Sign in with Google",
  },
  APPLE: {
    ALT: "Apple Logo",
    TEXT: "Sign in with Apple",
  },
  NOT_A_MEMBER: "Not a member?",
  SIGN_UP_NOW: "Sign up now",
  FORGOT_PASSWORD: "Forgot password?",
  LOG_IN: "Log in",
};
