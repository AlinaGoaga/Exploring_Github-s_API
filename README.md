This project is meant to help explore [Github's API](https://developer.github.com/v3/).

The app has been deployed to Heroku and can be found at https://github-repos-alina.herokuapp.com/.

## How to run

Install dependencies: ```npm install```
Start server: ```npm start```
Run linting: ```tslint --project . --fix```

## About the app

- Uses React with Typescript and Semantic UI for styling
- setState and API calls in Component Did Mount have been replaced with useState and useEffect
- Added the token temporarily in the application as Github have a per hour limit for unauthenticated API calls (this has been removed before the data was pushed to Github however the placeholder has been left in the code for it to be added at any point when running the app locally)
- Uses Circle CI for continuous integration

## Future developments

- Adjust Circle CI config for continuous deployment 
- Set up caching to avoid having to make API calls each time the app runs 
- Add tests - unit/integration (Jest/Enzyme)
- Use JWT tokens for authentication
...


