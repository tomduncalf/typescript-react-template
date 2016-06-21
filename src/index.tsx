// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';
// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');

// Import our App container (which we will create in a second)
import App from 'containers/App';

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get our root element
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App Container which handles the reloading
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

// Handle hot reloading actions from Webpack
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // If we receive a HMR action for our App container, then reload it
    // using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App').default;

    // And render it into our root element again
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}