'use strict';

import React, { Component } from 'react';

const profileUrl = 'http://kureev.com';
const currentYear = new Date().getFullYear(); 

const Footer = React.createClass({
    render() {
        return (
            <div>
                <span>&copy; {currentYear} </span>
                <a href={profileUrl}>Kureev Alexey</a>
            </div>
        );
    }
});

export default Footer;