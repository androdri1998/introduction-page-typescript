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
    toggle: {
      background: string;
      iconColor: string;
    };
  };
}
