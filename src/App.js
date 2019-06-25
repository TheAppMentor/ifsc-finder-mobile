import React from 'react';
import './App.css';

import 'antd-mobile/dist/antd-mobile.css';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history';

import MobileHomeScreen from './react_components/screens/mobile_homeScreen' 
import MobileCityResultsScreen from './react_components/screens/mobile_cityResultsPage' 
import MobileCitySearchModal from './react_components/screens/mobile_citySearchModal.js' 

//react-redux 
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'

import { PersistGate } from 'redux-persist/lib/integration/react';

class App extends React.Component {
    render() {
        return (
            <Provider store={store} persistor={persistor}> 
                <PersistGate loading={null} persistor={persistor}>     
                    <Router history={history}>
                        <Switch>
                            <Route path='/searchCity' component={MobileCitySearchModal} />
                            <Route path='/city' component={MobileCityResultsScreen} />
                            <Route path='/' component={MobileHomeScreen} />
                        </Switch>
                    </Router>
                </PersistGate>     
            </Provider> 
        );
  }
}

export default App;
