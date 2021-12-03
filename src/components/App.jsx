import React from 'react'
import '../assets/css/app.css'

/* Components */
import Sidebar from './Sidebar';
import ContentWrapper from './ContentWrapper.jsx'

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
