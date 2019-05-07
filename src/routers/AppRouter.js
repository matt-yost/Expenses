import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Help from '../components/Help';
import EditExpense from '../components/EditExpense';
import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;