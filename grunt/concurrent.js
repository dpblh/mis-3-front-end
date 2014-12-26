module.exports = {
    clean: [
        'clean'
    ],
    first_dev: [
        'less:dev_bootstrap',
        'less:dev_app',
        'concat'
    ],
    first_prod: [
        'less:prod_bootstrap',
        'less:prod_app',
        'concat'
    ],
    second_prod: [
        'uglify'
    ],
    three: [
        'copy:styles',
        'copy:scripts'
    ],
    server: [
        'connect',
        'watch'
    ]
};