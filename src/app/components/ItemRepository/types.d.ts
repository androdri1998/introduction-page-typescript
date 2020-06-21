export interface IPropsContainer {
  repository: {
    name: string;
    technology: string[];
    coverPhoto: string;
    linkToRepository: string;
  };
}

export interface IPropsPresentation {
  repository: {
    name: string;
    technology: string[];
    coverPhoto: string;
    linkToRepository: string;
  };
  backgroundInfoColor: string;
  colorName: string;
  colorDescription: string;
}

export interface IContainerInfo {
  background: string;
}

export interface ITitleName {
  color: string;
}

export interface IDescription {
  color: string;
}
