# cypress-example
This is a simple cypress example project to verify project setup

# Setup
- clone to repository into a local folder
- Make sure you have `nodejs` installed and setup on your machine
- Run the command `npm install` this will install all dependencies

# Run Tests
- To run the tests from the cypress UI, us the following command `npx cypress open` 
- To run all the tests from the command line use the command `npx cypress run`

# Notes about Initial setup 
This section details how I setup cypress for the project, but this is not needed if you pull the code from github. It is simple included for reference.
- I used homebrew to install node, using the command `brew install node` which installed `npm` version `v19.2.0` and `npm` version `8.19.3`
- I then used npm to install cypress `npm install cypress --save-dev` This installed cypress to the project in the `node_modules` folder and created a `package.json` The version install was `12.0.2`
