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
            label: 'Features',
            items: [
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
