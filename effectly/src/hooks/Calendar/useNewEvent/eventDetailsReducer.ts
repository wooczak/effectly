import { EventDetailsReducerActions as Actions } from "../../../core/variables";

interface State {
  eventName: string;
  isAllDay: boolean;
  category: string;
}

type Action =
  | { type: typeof Actions.SET_EVENT_NAME; payload: string }
  | { type: typeof Actions.TOGGLE_IS_ALL_DAY; payload?: boolean }
  | { type: typeof Actions.SET_CATEGORY; payload: string };

export const initialState: State = {
  eventName: "",
  isAllDay: false,
  category: "",
};

const eventDetailsReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_EVENT_NAME:
      return { ...state, eventName: payload };
    case Actions.TOGGLE_IS_ALL_DAY:
      return { ...state, isAllDay: !state.isAllDay };
    case Actions.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
};

export default eventDetailsReducer;
