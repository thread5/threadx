-- Quickstart
npm install yarn -g
yarn create react-app threadx

cd threadx/
yarn
yarn start
yarn build

yarn test
yarn eject



-- Dependencies
// Create React App
create-react-app 3.0.1
https://github.com/facebook/create-react-app

// Semantic UI React
yarn add semantic-ui-react
yarn add semantic-ui-css
https://github.com/Semantic-Org/Semantic-UI-React

// React Router
yarn add react-router
yarn add react-router-dom
https://github.com/ReactTraining/react-router

// Redux
yarn add redux
yarn add react-redux
yarn add redux-thunk
https://github.com/reduxjs/redux

// Analyzing the Bundle Size
yarn add source-map-explorer
https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

// react-textarea-autosize
yarn add react-textarea-autosize
https://github.com/andreypopp/react-textarea-autosize

// qrcode.react
yarn add qrcode.react
https://github.com/zpao/qrcode.react

// Misc
https://reactjs.org/docs/code-splitting.html
https://facebook.github.io/create-react-app/docs/production-build



-- Theming
https://react.semantic-ui.com/usage/
https://react.semantic-ui.com/theming

// How could I use semantic-ui offline? #1521
https://github.com/Semantic-Org/Semantic-UI/issues/1521

yarn remove semantic-ui-css
yarn add @craco/craco @semantic-ui-react/craco-less semantic-ui-less --dev
npx @semantic-ui-react/bootstrap

// Related files
./src/semantic-ui/theme.config
./src/semantic-ui/site/globals/site.variables
./node_modules/semantic-ui-less/theme.less
./node_modules/semantic-ui-less/themes/default/globals/site.variables



-- Misc
yarn build && find . -type f -name "*.map" -delete && cp -a ./build/index.html ./build/404.html && sed -i 's%@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);%@import url(/static/googleapis/fonts.googleapis.com.css.css);%' ./build/static/css/*.chunk.css && echo "......awesomely done......"
