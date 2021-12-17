import './App.css';
import TopMenu from './components/nav/TopMenu';
import Header from './components/nav/Header';
import React from 'react';
import Footer from './components/nav/Footer';
import { useSelector } from 'react-redux';

import routes from './components/routes'
import { useRoutes } from 'react-router';
import { storeageUtil} from './store/localStorage/local'
import { APP_CONFIG } from './services/Constants';
import StatusMessageBoard from './components/common/StatusMessageBoard';
function App() {

  const loggedIn = storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME)
  const routing = useRoutes(routes(loggedIn))
  const message = useSelector(state => state.message)
  return (
    
    <React.Fragment>
      <Header />
      <TopMenu />
      {
         message.cateogry ? <StatusMessageBoard message = {message}/> : ''
      }
      <div className="container">
        {routing}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
