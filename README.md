# Movies Browser

**LIVE LINK:** [https://m4dzix.github.io/movies-browser/](https://m4dzix.github.io/movies-browser/)

Service, where you can search popular movies and people related to the film industry. The data are fetched from the API interface provided by [TMDB](https://www.themoviedb.org/). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The main page presents movies. Ordered from most popular.

Navigation bar contains categories and search box.

## Actions

- Searching:
  Start typing interested movie or person. Data will be live filtered with typed letters.
  At the bottom of the page is a pagination that allows you to navigate between the pages.
- Reviewing details:
  Clicking on the card presenting a given movie or person opens subpage with details.

## Movie details:

First section: title, production details, rating and short description. If the movie data includes will be shown also a poster.

The following sections feature people from the cast and crew.
Clicking person card move to dedicated page with details.

## Person details:

First section: Person details such as photo, date and place of birth with short description.

The following sections list videos where the person was involved.
clicking on a movie card move to dedicated page with details.

## Technologies used:

- HTML
- REACT JS
- Create react app
- Styled-components
- React-redux
- Redux-saga
- @reduxjs/toolkit
- React-router
- Fetching API

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
