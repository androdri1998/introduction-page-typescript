export interface IAction {
  type: string;
  payload: {
    theme: string;
  };
}

export interface IStateStylesSettings {
  theme: string;
  settings: {
    background_light: string;
    background_dark: string;
    color_1: string;
    color_2: string;
    color_3: string;
    color_4: string;
    color_5: string;
    color_6: string;
    color_7: string;
    color_8: string;
    color_9: string;
    color_10: string;
    color_11: string;
    color_12: string;
    color_13: string;
    color_14: string;
  };
}
