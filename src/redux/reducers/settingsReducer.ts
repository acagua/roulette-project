import settingsTypes from "../types/settingsTypes";

export interface ISettingsState {
  visible: boolean;
  backgroundColor: string;
  zoneBaseAmount: number;
  numberBaseAmount: number;
}

const initialState: ISettingsState = {
  visible: false,
  backgroundColor: "black",
  zoneBaseAmount: 5000,
  numberBaseAmount: 1000,
};

// REDUCER
export const settingsReducer = (
  state: ISettingsState = initialState,
  action: any
) => {
  switch (action.type) {
    case settingsTypes.CHANGE_VISIBILITY: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case settingsTypes.CHANGE_BACKGROUND_COLOR: {
      return {
        ...state,
        backgroundColor: action.payload,
      };
    }
    case settingsTypes.RESET_TO_DEFAULT: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
