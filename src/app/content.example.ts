export interface IContent {
  firstname: string;
  lastname: string;
  linkProfilePhoto: string;
  linkToLinkedin: string;
  skills: {
    technology: string;
    percentage: number;
    color: string;
  }[];
  repositories: {
    name: string;
    technology: string[];
    coverPhoto: string;
    linkToRepository: string;
  }[];
  aboutMe: string[];
}

export const content: IContent = {
  firstname: "FISRT_NAME",
  lastname: "LAST_NAME",
  linkProfilePhoto: "LINK_TO_PROFILE_PHOTO",
  linkToLinkedin: "LINK_TO_LINKEDIN",
  skills: [
    {
      technology: "NAME_TECHNOLOGY",
      percentage: 0, // knowledge measured in percentage
      color: "ACCENT_COLOR",
    },
  ],
  repositories: [
    {
      name: "NAME_REPOSITORY",
      coverPhoto: "LINK_TO_COVER_PHOTO",
      linkToRepository: "LINK_TO_REPOSITORY",
      technology: ["NAME_TECHNOLOGY"],
    },
  ],
  aboutMe: ["PARAGRAPH_1", "PARAGRAPH_2", "PARAGRAPH_3"],
};
