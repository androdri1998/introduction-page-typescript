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
  };
}
