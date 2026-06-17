const fs = require('fs');

let content = fs.readFileSync('NavBar.jsx', 'utf-8');

// Add useLocation import
content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useLocation } from 'react-router-dom';");

// Add location var
content = content.replace("const NavBar = ({ forceScrolled = false }) => {", "const NavBar = ({ forceScrolled = false }) => {\n    const location = useLocation();\n    const pathname = location.pathname;");

// Desktop Navigation
// Home
content = content.replace(
    '<Link to="/" className={`text-sm font-medium py-5 transition-colors ${isScrolled ? \'text-pink-600\' : \'text-pink-300\'}`}>Home</Link>',
    '<Link to="/" className={`text-sm font-medium py-5 transition-colors ${pathname === \'/\' ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}>Home</Link>'
);

// About
content = content.replace(
    '<Link to="/about" className={`text-sm font-medium transition-colors ${isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\'}`}>About us</Link>',
    '<Link to="/about" className={`text-sm font-medium transition-colors ${pathname === \'/about\' ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}>About us</Link>'
);

// Services
content = content.replace(
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\'}`}\n                                >\n                                    Services',
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${pathname.startsWith(\'/services\') ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}\n                                >\n                                    Services'
);

// Discover
content = content.replace(
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\'}`}\n                                >\n                                    Discover',
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${[\'/course\', \'/gallery\', \'/contact\'].includes(pathname) ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}\n                                >\n                                    Discover'
);

// Mobile Navigation
// Home
content = content.replace(
    '<Link to="/" className="flex items-center gap-3 px-3 py-2 text-base font-medium text-pink-600 bg-gray-100 rounded-md">',
    '<Link to="/" className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors ${pathname === \'/\' ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}>'
);

// About
content = content.replace(
    '<Link to="/about" className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors">',
    '<Link to="/about" className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors ${pathname === \'/about\' ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}>'
);

// Services (Mobile)
content = content.replace(
    'className="w-full flex justify-between items-center py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md px-3 -ml-3 transition-colors"\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiShoppingBag className="w-5 h-5" />\n                                        <span>Services</span>',
    'className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors ${pathname.startsWith(\'/services\') ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiShoppingBag className="w-5 h-5" />\n                                        <span>Services</span>'
);

// Discover (Mobile)
content = content.replace(
    'className="w-full flex justify-between items-center py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md px-3 -ml-3 transition-colors"\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiSearch className="w-5 h-5" />\n                                        <span>Discover</span>',
    'className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors ${[\'/course\', \'/gallery\', \'/contact\'].includes(pathname) ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiSearch className="w-5 h-5" />\n                                        <span>Discover</span>'
);

fs.writeFileSync('NavBar.jsx', content);
console.log('Done replacing active states in NavBar.jsx');
