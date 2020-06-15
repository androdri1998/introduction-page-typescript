import { IAction } from "./stylesSettingsTypes";
import { lightTheme, darkTheme } from "../../utils/themeSettings";
import { themes } from "../../utils/constants";

const stylesSettingsActions = {
  UPDATE_THEME: "@styles/UPDATE_THEME",
};

const INITIAL_STATE = {
  theme: themes.LIGHT,
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
        settings: payload.theme === themes.LIGHT ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};

export const updateTheme = (theme: string): IAction => {
  return {
    type: stylesSettingsActions.UPDATE_THEME,
    payload: {
      theme,
    },
  };
};
