type IState = {
  addNewEventModalOpened: boolean;
}

export const ACTIONS = {
  TOGGLE_ADDNEWEVENT: "TOGGLE_ADDNEWEVENT",
};

export const initialState: IState = {
  addNewEventModalOpened: false,
};

export const calendarReducer = (
  state = initialState,
  action: { type: any; payload?: any }
) => {
  const { type } = action;

  switch (type) {
    case ACTIONS.TOGGLE_ADDNEWEVENT:
      return {
        ...state,
        addNewEventModalOpened: !state.addNewEventModalOpened,
      };
  }
};
