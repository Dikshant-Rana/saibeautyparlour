const fs = require('fs');
const path = require('path');

const pages = [
    'LandingPage.jsx',
    'AboutPage.jsx',
    'ContactPage.jsx',
    'CoursePage.jsx',
    'GalleryPage.jsx',
    'HairServicesPage.jsx',
    'MakeupServicesPage.jsx',
    'NailsSpaServicesPage.jsx',
    'SkincareServicesPage.jsx',
    'WeddingServicesPage.jsx'
];

pages.forEach(page => {
    let content = fs.readFileSync(page, 'utf-8');

    // Add imports if not present
    if (!content.includes('import NavBar')) {
        content = content.replace(/(import .*;\n)+/, match => `${match}import NavBar from './NavBar';\nimport Footer from './Footer';\n`);
    }

    // Replace header
    const headerStart = content.indexOf('<header');
    if (headerStart !== -1) {
        const headerEnd = content.indexOf('</header>', headerStart) + '</header>'.length;
        // For LandingPage, check if there's a mobile menu block that needs replacing too
        if (page === 'LandingPage.jsx') {
            const mobileMenuStart = content.indexOf('{/* Backdrop for Mobile Menu */}');
            let replaceEnd = headerEnd;
            if (mobileMenuStart !== -1) {
                // Find where the mobile menu ends
                const nextTag = content.indexOf('</header>', mobileMenuStart);
                if (nextTag > -1) {
                    replaceEnd = nextTag + '</header>'.length;
                }
            }
            content = content.substring(0, headerStart) + '<NavBar />' + content.substring(replaceEnd);
        } else {
            content = content.substring(0, headerStart) + '<NavBar forceScrolled={true} />' + content.substring(headerEnd);
        }
    }

    // Replace footer
    const footerStart = content.indexOf('<footer');
    if (footerStart !== -1) {
        const footerEnd = content.indexOf('</footer>', footerStart) + '</footer>'.length;
        content = content.substring(0, footerStart) + '<Footer />' + content.substring(footerEnd);
    }

    fs.writeFileSync(page, content);
});
console.log('Pages updated successfully.');
