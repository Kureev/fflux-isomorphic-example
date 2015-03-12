'use strict';

import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
    onClick() {
        alert('hello, world!');
    }

    render() {
        return (
            <section>
                <Header />
                <Footer />
            </section>
        );
    }
}

export default Layout;