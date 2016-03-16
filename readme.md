*Steps for setting up your base react project with webpack and babel:*

1. create empty directory
    mkdir "projectdir"
    cd projectdir
2. run npm init, which creates project.json file
3. install reactjs through npm (use --save for saving dependencies to project.json):
    npm install --save react react-dom
4. install developer dependencies (used only for development, not production):
    npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
5. create base folder structure:
    mkdir app
    cd app
    type NUL > index.html --creating index.html file
    type NUL > index.js --creating index.js file
    cd ..
    type NUL > webpack.config.js --creating webpack.config.js file for webpack
    type NUL > .babelrc --creating babel config file
