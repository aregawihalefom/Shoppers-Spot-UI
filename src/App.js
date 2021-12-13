import './App.css';

import Home from './components/Home'
import TopMenu from './components/nav/TopMenu';
import Header from './components/nav/Header';
import React from 'react';
import Footer from './components/nav/Footer';
import RoutesFile from './components/routes/RoutesFile';
import {api} from './services/API'

function App() {

  return (

      <React.Fragment>
        <Header />
        <TopMenu />
        <RoutesFile/>
        <Footer />
      </React.Fragment>
  );
}

export default App;
