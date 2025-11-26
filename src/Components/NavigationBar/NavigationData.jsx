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
        name: 'Campaign & Shoots',
        path: '/campaigns'
    },
    {
        id: 4,
        name: 'About Us',
        path: '/about',
        sublinks: [
            {
                id: 'about-story',
                name: 'Our Story',
                path: '/about/our-story'
            },
            {
                id: 'about-team',
                name: 'Meet the Team',
                path: '/about/team'
            },
            {
                id: 'about-work',
                name: 'Our Work',
                path: '/about/work'
            },
            {
                id: 'about-careers',
                name: 'Careers',
                path: '/about/careers'
            }
        ]
    }
]

export default NavigationData;