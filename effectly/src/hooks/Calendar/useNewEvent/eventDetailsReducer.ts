import { MutableRefObject } from "react";
import { EventDetailsReducerActions as Actions } from "../../../core/variables";

interface State {
  eventName: string;
  isAllDay: boolean;
  eventTimeStart: MutableRefObject<{ value: string }>;
  eventTimeEnd: MutableRefObject<{ value: string }>;
  eventDateStart: MutableRefObject<{ value: string }>;
  eventDateEnd: MutableRefObject<{ value: string }>;
  category: string;
}

type Action =
  | { type: typeof Actions.SET_EVENT_NAME; payload: string }
  | { type: typeof Actions.TOGGLE_IS_ALL_DAY; payload?: boolean }
  | { type: typeof Actions.SET_EVENT_TIME_START; payload: string }
  | { type: typeof Actions.SET_EVENT_TIME_END; payload: string }
  | { type: typeof Actions.SET_EVENT_DATE_START; payload: string }
  | { type: typeof Actions.SET_EVENT_DATE_END; payload: string }
  | { type: typeof Actions.SET_CATEGORY; payload: string };

export const initialState: State = {
  eventName: "",
  isAllDay: false,
  eventTimeStart: { current: { value: "" } },
  eventTimeEnd: { current: { value: "" } },
  eventDateStart: { current: { value: "" } },
  eventDateEnd: { current: { value: "" }},
  category: "",
};

const eventDetailsReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_EVENT_NAME:
      return { ...state, eventName: payload };
    case Actions.TOGGLE_IS_ALL_DAY:
      return { ...state, isAllDay: !state.isAllDay };
    case Actions.SET_EVENT_TIME_START:
      return { ...state, eventTimeStart: { current: { value: payload } } };
    case Actions.SET_EVENT_TIME_END:
      return { ...state, eventTimeEnd: { current: { value: payload } } };
    case Actions.SET_EVENT_DATE_START:
      return { ...state, eventDateStart: { current: { value: payload } } };
    case Actions.SET_EVENT_DATE_END:
      return { ...state, eventDateEnd: { current: { value: payload } } };
    case Actions.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
};

export default eventDetailsReducer;
