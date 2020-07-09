# introduction-page-typescript  
  
This is only a project to practice knowledgements in TypeScript and ReactJS. In this application has like goals show the minimal profile about the user setted in settings.  
It has four screens Introducing, Skills, Repositories and About. All screens are pre-configured in a file to configure application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Layouts  
  
  
## Configuring the project  
  
The project has a file in directory `./src/app` called of `content.example.ts` in this file has a example to configure the project, should be created a file called of `content.ts` with the configuration of the project.
  
#### `content.example.ts`
```
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

```
  
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.  
  
### `yarn build:dev`
  
Builds the app for the `build` folder with the environment `dev`.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.  
  
### `yarn build:prod`

Builds the app for the `build` folder with the environment `prod`.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
  
### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
