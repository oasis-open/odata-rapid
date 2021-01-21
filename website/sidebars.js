module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'gettingstarted'
            ]
        },
        {
            type: 'category',
            label: 'Features',
            items: [
                'spec/features',
                'rapid-read',
                'rapid-edit',
                'operations',
                'spec/servicedescription',
                'spec/batch'
            ]
        },
        {
            type: 'category',
            label: 'RAPID Schema Definition Language (RSDL)',
            items: [
                'rsdl/rsdl-intro',
                'rsdl/rsdl-semantics',
                'rsdl/rsdl-abnf',
            ]
        },
        {
            type: 'category',
            label: 'Related Technologies',
            items: [
                'related/odata',
                'related/graphql',
                'related/openapi'
            ]
        }
    ],
    tutorial: {
        'Rapid Tutorial': [
            'tutorial/buildserver',
            'tutorial/buildclient'
        ]
    }
};
