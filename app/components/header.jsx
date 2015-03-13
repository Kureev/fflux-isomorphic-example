'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

const ffluxUrl = 'http://github.com/Kureev/fflux';

const Header = React.createClass({
    render() {
        return (
            <section>
                <h2>Wishlist example</h2>
                <span>this example using </span>
                <a href={ffluxUrl}>fflux</a>

                <ul>
                    <li>
                        <Link to="index">Items List</Link>
                    </li>
                    <li>
                        <Link to="wishlist">Wishlist</Link>
                    </li>
                </ul>
            </section>
        );
    }
});

export default Header;