'use strict';

import React, { Component } from 'react';
import Rotuer, { RouteHandler } from 'react-router';
import Header from './header';
import Footer from './footer';

const Layout = React.createClass({
    render() {
        return (
            <section>
                <Header />
                <RouteHandler />
                <Footer />
            </section>
        );
    }
});

export default Layout;