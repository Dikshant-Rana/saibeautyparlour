const fs = require('fs');

let content = fs.readFileSync('NavBar.jsx', 'utf-8');

// Desktop Services
content = content.replace(
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\'}`}\n                                >\n                                    Services',
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${pathname.startsWith(\'/services\') ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}\n                                >\n                                    Services'
);

// Desktop Discover
content = content.replace(
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\'}`}\n                                >\n                                    Discover',
    'className={`text-sm font-medium transition-colors flex items-center py-5 ${[\'/course\', \'/gallery\', \'/contact\'].includes(pathname) ? (isScrolled ? \'text-pink-600\' : \'text-pink-300\') : (isScrolled ? \'text-gray-900 hover:text-pink-600\' : \'text-white hover:text-pink-300\')}`}\n                                >\n                                    Discover'
);

// Mobile Services
content = content.replace(
    'className="w-full flex justify-between items-center py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md px-3 -ml-3 transition-colors"\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiShoppingBag className="w-5 h-5" />\n                                        <span>Services</span>',
    'className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors ${pathname.startsWith(\'/services\') ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiShoppingBag className="w-5 h-5" />\n                                        <span>Services</span>'
);

// Mobile Discover
content = content.replace(
    'className="w-full flex justify-between items-center py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md px-3 -ml-3 transition-colors"\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiSearch className="w-5 h-5" />\n                                        <span>Discover</span>',
    'className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors ${[\'/course\', \'/gallery\', \'/contact\'].includes(pathname) ? \'text-pink-600 bg-pink-50\' : \'text-gray-900 hover:bg-gray-100\'}`}\n                                >\n                                    <span className="flex items-center gap-3">\n                                        <FiSearch className="w-5 h-5" />\n                                        <span>Discover</span>'
);

fs.writeFileSync('NavBar.jsx', content);
console.log('Fixed active state for dropdowns.');
