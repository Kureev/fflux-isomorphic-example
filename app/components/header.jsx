'use strict';

import React, { Component } from 'react';

const ffluxUrl = 'http://github.com/Kureev/fflux';

const Header = React.createClass({
    render() {
        return (
            <section>
                <h2>Wishlist example</h2>
                <span>this example using </span>
                <a href={ffluxUrl}>fflux</a>
            </section>
        );
    }
});

export default Header;