const fs = require('fs');

try {
    const content = fs.readFileSync('LandingPage.jsx', 'utf-8');

    const headerStart = content.indexOf('<header');
    const headerEnd = content.indexOf('</header>') + '</header>'.length;
    const headerContent = content.substring(headerStart, headerEnd);

    const footerStart = content.indexOf('<footer');
    const footerEnd = content.indexOf('</footer>') + '</footer>'.length;
    const footerContent = content.substring(footerStart, footerEnd);

    const navBarFileContent = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiInfo, FiShoppingBag, FiImage, FiScissors, FiDroplet, FiSearch, FiPhone } from 'react-icons/fi';
import { FaPaintbrush, FaSpa, FaRing, FaGraduationCap } from 'react-icons/fa6';

const NavBar = ({ forceScrolled = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isScrolledState, setIsScrolledState] = useState(false);

    const isScrolled = forceScrolled || isScrolledState;

    // Close dropdowns when clicking outside (for touch devices)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if ('ontouchstart' in window) {
                const dropdown = event.target.closest('.dropdown-container');
                if (!dropdown) {
                    setIsServicesOpen(false);
                    setIsResourcesOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Scroll detection for transparent navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolledState(true);
            } else {
                setIsScrolledState(false);
            }
        };

        if (!forceScrolled) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [forceScrolled]);

    return (
        <>
            ${headerContent}
        </>
    );
};

export default NavBar;
`;

    const footerFileContent = `import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        ${footerContent}
    );
};

export default Footer;
`;

    fs.writeFileSync('NavBar.jsx', navBarFileContent);
    fs.writeFileSync('Footer.jsx', footerFileContent);
    console.log('NavBar.jsx and Footer.jsx generated successfully.');
} catch (e) {
    console.error(e);
}
