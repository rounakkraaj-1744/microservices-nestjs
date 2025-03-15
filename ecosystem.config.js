export const apps = [
    {
        name: 'api-gateway',
        script: 'dist/apps/api-gateway/main.js',
        watch: true,
        ignore: ['node_modules']
    },
    {
        name: 'ms-a',
        script: 'dist/apps/ms-a/main.js',
        watch: true,
        ignore: ['node_modules']
    },
    {
        name: 'ms-b',
        script: 'dist/apps/ms-b/main.js',
        watch: true,
        ignore: ['node_modules']
    },
];