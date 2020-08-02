import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import login from './JoinOption';
import history from './history';
import Menus from './Menus';
import guidelines from './Menus/Guidelines/guide';
import DrugList from './DrugList';
import { Dispensary, Prescriber, Supplier } from './Forms';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/login" exact component={login} />
            <Route path="/drugs" exact component={DrugList} />
            <Route path="/guide" exact component={guidelines} />
            <Route path="/supl" exact component={Supplier} />
            <Route path="/pres" exact component={Prescriber} />
            <Route path="/disp" exact component={Dispensary} />

            <Route path="/" exact component={Menus} />
        </Switch>
    </Router>
);

export default Routes;
