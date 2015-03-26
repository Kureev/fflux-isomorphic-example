'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderMenu from './headerMenu';

const Header = React.createClass({
    statics: {
        fetchData: (app) => {
            return app.actions()
                .get('wishlist')
                .fetch();
        }
    },

    render() {
        return (
            <section className="header">
                <div className="header-content">
                    <h2 className="header-caption">Wishlist example</h2>

                    <HeaderMenu {...this.props} />
                </div>
            </section>
        );
    }
});

export default Header;