import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import InitalPage from './Components/InitialPage';
import MenuGoogle from './Components/MenuGoogle'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={InitalPage} />
                <Route path='/teste' component={MenuGoogle} />
            </Switch>
        </BrowserRouter>
    )
}