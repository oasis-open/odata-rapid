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
                'rsdl/rsdl-capabilities',
                'rsdl/rsdl-capability-mapping'
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
    samples: 
        {
           'Samples' : [
               'samples/jetsons',
               'tutorial/graphqlclient'
            ]
       }
};
