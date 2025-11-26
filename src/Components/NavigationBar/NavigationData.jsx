const NavigationData = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Branding',
        path: '/branding'
    },
    {
        id: 3,
        name: 'Performance',
        path: '/performance'
    },
    {
        id: 4,
        name: 'Influencer',
        path: '/influencer',
        sublinks: []
    },
    {
        id: 4,
        name: 'About Us',
        path: '/aboutus',
        sublinks: [
            {
                id: 'about-story',
                name: 'Our Story',
                path: '/about/our-story'
            },
            {
                id: 'about-work',
                name: 'Our Work',
                path: '/about/work'
            },
            {
                id: 'about-careers',
                name: 'Career',
                path: '/about/careers'
            },
            {
                id: 'about-contact',
                name: 'Contact',
                path: '/contact'
            }
        ]
    }
]

export default NavigationData;