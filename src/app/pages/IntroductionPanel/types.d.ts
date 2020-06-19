export interface IPropsContainer {}

export interface IPropsPresentation {
  profilePhoto: string;
  colorTextName: string;
  colorOthersText: string;
  linkToLinkedin: string;
  firstname: string;
  lastname: string;
  colorTextPanel: string;
  backgroundLineColor: string;
}

export interface ITextNameProfile {
  marginTop?: number;
  color: string;
}
export interface ITextPanel {
  marginTop?: number;
  color: string;
}
export interface IOthersText {
  color: string;
}
export interface IContainerOthers {
  color: string;
}
export interface ILine {
  background: string;
}
