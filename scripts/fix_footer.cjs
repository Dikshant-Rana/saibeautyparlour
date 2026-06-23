const fs = require('fs');
const content = fs.readFileSync('LandingPage.jsx', 'utf-8');
const footerStart = content.indexOf('<footer');
const footerEnd = content.indexOf('</footer>', footerStart) + '</footer>'.length;
const footerContent = content.substring(footerStart, footerEnd);
const code = `import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        ${footerContent.replace('./images/nobg_sailogo.png', '/images/nobg_sailogo.png')}
    );
};

export default Footer;`;
fs.writeFileSync('Footer.jsx', code);
console.log('Fixed Footer.jsx');
