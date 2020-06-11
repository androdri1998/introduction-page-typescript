import { IAction } from "./stylesSettingsTypes";
const stylesSettingsActions = {
  UPDATE_THEME: "@styles/UPDATE_THEME",
};

const INITIAL_STATE = {
  theme: "light",
};

export const stylesSettingsReducer = (
  state = INITIAL_STATE,
  { type, payload }: IAction
) => {
  switch (type) {
    case stylesSettingsActions.UPDATE_THEME:
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return state;
  }
};
