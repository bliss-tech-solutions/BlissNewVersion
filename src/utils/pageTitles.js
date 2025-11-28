/**
 * SEO-friendly page titles mapping
 * Format: "Page Title | Brand Name"
 */
export const defaultTitle = 'The Bliss Solution | Leading Real Estate Branding Agency in Gujarat';

const titleMap = {
    '/': defaultTitle,
    '/branding': 'Real Estate Branding Services | Premium Identity Design by The Bliss Solution',
    '/ourstory': 'Our Story | About The Bliss Solution - Real Estate Branding Experts',
    '/ourwork': 'Our Work Portfolio | Real Estate Marketing Projects by The Bliss Solution',
    '/performance': 'Performance Marketing | Real Estate Digital Marketing Services | The Bliss Solution',
    '/influencer': 'Influencer Marketing | Real Estate Influencer Campaigns | The Bliss Solution',
    '/about/careers': 'Careers | Join The Bliss Solution - Real Estate Marketing Agency',
    '/contact': 'Contact Us | Get in Touch with The Bliss Solution',
};

/**
 * Get SEO-friendly page title based on route
 * @param {string} pathname - Current route pathname
 * @returns {string} SEO-optimized page title
 */
export const getPageTitle = (pathname) => {
    return titleMap[pathname] || defaultTitle;
};

/**
 * Update document title
 * @param {string} pathname - Current route pathname
 */
export const updatePageTitle = (pathname) => {
    const title = getPageTitle(pathname);
    document.title = title;
};

export default titleMap;

