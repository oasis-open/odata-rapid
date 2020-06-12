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
            items: ['rapid-edit', 'operations'],
        },
        {
            type: 'category',
            label: 'Specification',
            items: [
                'spec/features',
                'spec/resourceformat',
                'spec/batch',
                'spec/odata',
            ]
        },
    ],
    tutorial: {
        'Rapid Tutorial': ['tutorial/buildserver','tutorial/buildclient'],
    },
};
