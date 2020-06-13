module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'gettingstarted', 'rapid-edit', 'operations'
            ],
        },
        {
            type: 'category',
            label: 'Optional Features',
            items: [
                'spec/features',
                'rsdl',
                'spec/resourceformat',
                'spec/batch',
                // 'spec/odata',
            ]
        },
    ],
    tutorial: {
        'Rapid Tutorial': ['tutorial/buildserver', 'tutorial/buildclient'],
    },
};
