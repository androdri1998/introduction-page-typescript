export interface IAction {
  type: string;
  payload: {
    theme: string;
  };
}

export interface IStateStylesSettings {
  theme: string;
  settings: {
    background: string;
    textColor: string;
    lineColor: string;
    toggle: {
      background: string;
      iconColor: string;
    };
  };
}
