export interface IPropsContainer {}

export interface IPropsPresentation {
  backgroundColor: string;
  profilePhoto: string;
  colorTextName: string;
  colorOthersText: string;
  linkToLinkedin: string;
  firstname: string;
  lastname: string;
}

export interface IContainerProps {
  background: string;
}

export interface ITextNameProfile {
  marginTop?: number;
  color: string;
}
export interface IOthersText {
  color: string;
}
export interface IContainerOthers {
  color: string;
}
