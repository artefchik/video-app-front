module.exports = {
    main: {
        input: '../../src/shared/api/schema.yaml',
        output: {
            target: '../../src/shared/api/schema.ts',
            prettier: true,
            override: {
                mutator: {
                    path: '../../src/shared/api/api.ts',
                    name: '$api',
                },
            },
        },
    },
};
