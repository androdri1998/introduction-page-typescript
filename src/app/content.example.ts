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
};
