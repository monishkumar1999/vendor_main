import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 approach
import { Provider } from 'react-redux';
import store from './reduxStore/store';  // Ensure correct import
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';  // Wrap Router here

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root for rendering (React 18 approach)
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <Provider store={store}>
    <Router> {/* Only place for Router */}
      <App />
    </Router>
  </Provider>
);
