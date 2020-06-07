module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Introduction',
            items: ['gettingstarted', 'rsdl'],
        },
        {
            type: 'category',
            label: 'Customization',
            items: ['operations', 'rapid-edit'],
        },
        {
            type: 'category',
            label: 'Specification',
            items: [
                'spec/features',
                'spec/odata',
                'spec/resourceformat',
                'spec/batch',
            ]
        },
    ],
    tutorial: {
        'Rapid Tutorial': ['tutorial/buildserver','tutorial/buildclient'],
    },
};
