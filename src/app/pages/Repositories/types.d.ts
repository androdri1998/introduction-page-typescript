export interface IPropsContainer {}

export interface IPropsPresentation {
  repositories: {
    name: string;
    technology: string[];
    coverPhoto: string;
    linkToRepository: string;
  }[];
  colorTitle: string;
  colorIcon: string;
  linkToGithub: string;
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
