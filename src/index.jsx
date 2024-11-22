/* ============================================
   Entry Point for the React Application
   --------------------------------------------
   This file renders the root App component 
   into the DOM element with the ID 'root'.
   ============================================ */

   import React from 'react'; // Core React library for building UIs
   import ReactDOM from 'react-dom/client'; // ReactDOM for rendering components to the DOM
   import App from './App.jsx'; // Main App component
   import './index.css'; // Global CSS styles
   
   // Render the App component inside the root DOM element
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App /> {/* Main component of the application */}
     </React.StrictMode>,
   );
   