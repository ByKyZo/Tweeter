import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/signin">
                <Login />
            </Route>
            <Route path="/signup">
                <Register />
            </Route>
        </BrowserRouter>
    );
};

export default Router;
