import { EventDetailsReducerActions as Actions } from "../../../core/variables";

interface State {
  isAllDay: boolean;
  eventStart: Date;
  eventEnd: Date;
  category: string;
}

type Action =
  | { type: typeof Actions.TOGGLE_IS_ALL_DAY; payload?: boolean }
  | { type: typeof Actions.SET_EVENT_START; payload: Date }
  | { type: typeof Actions.SET_EVENT_END; payload: Date }
  | { type: typeof Actions.SET_CATEGORY; payload: string };

export const initialState: State = {
  isAllDay: false,
  eventStart: new Date(),
  eventEnd: new Date(),
  category: "",
};

const eventDetailsReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case Actions.TOGGLE_IS_ALL_DAY:
      return { ...state, isAllDay: !state.isAllDay };
    case Actions.SET_EVENT_START:
      return { ...state, eventStart: payload };
    case Actions.SET_EVENT_END:
      return { ...state, eventEnd: payload };
    case Actions.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
};

export default eventDetailsReducer;
