export interface IPropsContainer {}

export interface IPropsPresentation {
  toggleBackground: string;
  theme: string;
  iconColor: string;
  handlerSwitchTheme: Function;
}

export interface IToggleProps {
  background: string;
  theme: TTheme;
}

type TTheme = "light" | "dark";
