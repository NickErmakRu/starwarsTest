import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopHeader from './shopHeader/shopHeader';
import {HomePage, CartPage} from '../components/pages';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={2} total={1398} />
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact 
        />
        <Route
          path='/cart'
          component={CartPage}
          exact 
        />
      </Switch>
    </main>
  );
}

export default App;
