'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
    render() {
        return (
            <section className="header">
                <div className="header-content">
                    <h2 className="header-caption">Wishlist example</h2>

                    <ul className="header-menu">
                        <li className="header-menu-item">
                            <Link to="index">Items List</Link>
                        </li>
                        <li className="header-menu-item">
                            <Link to="wishlist">Wishlist</Link>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
});

export default Header;