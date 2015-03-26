'use strict';

import React, { Component } from 'react';
import Rotuer, { RouteHandler } from 'react-router';
import Header from './header';
import Footer from './footer';

const Layout = React.createClass({
    statics: {
        fetchData: (app) => {
            return Header.fetchData(app);
        }
    },

    render() {
        return (
            <section className="container">
                <Header {...this.props} />
                <section className="content">
                    <RouteHandler {...this.props} />
                </section>
                <Footer />
            </section>
        );
    }
});

export default Layout;