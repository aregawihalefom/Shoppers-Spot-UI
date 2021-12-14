import './App.css';
import Home from './components/Home'
import TopMenu from './components/nav/TopMenu';
import Header from './components/nav/Header';
import React from 'react';
import Footer from './components/nav/Footer';

import routes from './components/routes'
import { useRoutes } from 'react-router';
import { storeageUtil} from './store/localStorage/local'
import { APP_CONFIG } from './services/Constants';
function App() {


  const loggedIn = storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME)
  const role = storeageUtil.getItem(APP_CONFIG.data.ROLE)
  const routing = useRoutes(routes(loggedIn))
  return (

    <React.Fragment>
      <Header />
      <TopMenu />
      <div className="container">
        {routing}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
