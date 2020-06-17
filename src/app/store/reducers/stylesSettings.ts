import { IAction } from "./stylesSettingsTypes";
import { colorsTheme } from "../../utils/themeSettings";
import { themes } from "../../utils/constants";

const stylesSettingsActions = {
  UPDATE_THEME: "@styles/UPDATE_THEME",
};

const INITIAL_STATE = {
  theme: themes.DARK,
  settings: colorsTheme,
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

export const updateTheme = (theme: string): IAction => {
  return {
    type: stylesSettingsActions.UPDATE_THEME,
    payload: {
      theme,
    },
  };
};
