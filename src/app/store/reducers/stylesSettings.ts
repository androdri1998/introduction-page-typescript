import { IAction } from "./stylesSettingsTypes";
import { lightTheme, darkTheme } from "../../utils/themeSettings";

const stylesSettingsActions = {
  UPDATE_THEME: "@styles/UPDATE_THEME",
};

const INITIAL_STATE = {
  theme: "light",
  settings: lightTheme,
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
        settings: payload.theme === "light" ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};
