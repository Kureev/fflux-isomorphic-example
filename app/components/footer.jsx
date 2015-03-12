'use strict';

import React, { Component } from 'react';

const profileUrl = 'http://kureev.com';
const currentYear = new Date().getFullYear(); 

class Footer extends Component {
    render() {
        return (
            <div>
                <span>&copy; {currentYear} </span>
                <a href={profileUrl}>Kureev Alexey</a>
            </div>
        );
    }
}

export default Footer;