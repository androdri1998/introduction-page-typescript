export interface IPropsContainer {}

export interface IPropsPresentation {
  colorTitle: string;
  skills: {
    technology: string;
    percentage: number;
    color: string;
  }[];
  colorIcon: string;
  linkToLinkedin: string;
  colorOthersText: string;
}

export interface ITitlePage {
  color: string;
}

export interface IContainerIconProps {
  color: string;
}

export interface IContainerOthers {
  color: string;
}
