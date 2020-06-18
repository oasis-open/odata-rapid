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
                'rsdl',
                'spec/resourceformat',
                'spec/batch'
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