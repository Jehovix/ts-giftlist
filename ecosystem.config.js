module.exports = {
    apps: [
        {
            name: 'myapp',
            script: './dist/index.js',
            autorestart: true,
            max_memory_restart: '2G',
            exec_mode: "cluster", //domyślnie jest fork
            instances: -1, //liczba/"max"/ -1
        },
    ],
};