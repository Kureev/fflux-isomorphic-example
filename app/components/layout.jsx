'use strict';

import React, { Component } from 'react';
import Rotuer, { RouteHandler } from 'react-router';
import Header from './header';
import Footer from './footer';

const Layout = React.createClass({
    render() {
        return (
            <section className="container">
                <Header />
                <section className="content">
                    <RouteHandler />
                </section>
                <Footer />
            </section>
        );
    }
});

export default Layout;