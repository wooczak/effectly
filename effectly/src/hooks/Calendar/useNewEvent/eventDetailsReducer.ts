import { EventDetailsReducerActions as Actions } from "../../../core/variables";

interface State {
  eventName: string;
  isAllDay: boolean;
  eventTimeStart: Date;
  eventTimeEnd: Date;
  eventDateStart: Date;
  eventDateEnd: Date;
  category: string;
}

type Action =
  | { type: typeof Actions.SET_EVENT_NAME; payload: string }
  | { type: typeof Actions.TOGGLE_IS_ALL_DAY; payload?: boolean }
  | { type: typeof Actions.SET_CATEGORY; payload: string }
  | { type: typeof Actions.SET_EVENT_TIME_START, payload: Date }
  | { type: typeof Actions.SET_EVENT_TIME_END, payload: Date }
  | { type: typeof Actions.SET_EVENT_DATE_START, payload: Date }
  | { type: typeof Actions.SET_EVENT_DATE_END, payload: Date }

export const initialState: State = {
  eventName: "",
  isAllDay: false,
  category: "",
  eventTimeStart: new Date(),
  eventTimeEnd: new Date(),
  eventDateStart: new Date(),
  eventDateEnd: new Date(),
};

const eventDetailsReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_EVENT_NAME:
      return { ...state, eventName: payload };
    case Actions.TOGGLE_IS_ALL_DAY:
      return { ...state, isAllDay: !state.isAllDay };
    case Actions.SET_EVENT_TIME_START:
      return { ...state, eventTimeStart: payload };
    case Actions.SET_EVENT_TIME_END:
      return { ...state, eventTimeEnd: payload };
    case Actions.SET_EVENT_DATE_START:
      return { ...state, eventDateStart: payload };
    case Actions.SET_EVENT_DATE_END:
      return { ...state, eventDateEnd: payload };
    case Actions.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
};

export default eventDetailsReducer;
