'use strict';

import React, { Component } from 'react';

const profileUrl = 'http://kureev.com';
const currentYear = new Date().getFullYear(); 
const ffluxUrl = 'http://github.com/Kureev/fflux';

const Footer = React.createClass({
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <span>&copy; {currentYear} </span>
                    <a href={profileUrl}>Kureev Alexey</a>.
                    
                    <span> Made with </span>
                    <a href={ffluxUrl}>fflux</a>.
                </div>
            </div>
        );
    }
});

export default Footer;