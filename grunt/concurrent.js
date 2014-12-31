module.exports = {
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
    copyAll: [
        'copy:styles',
        'copy:scripts'
    ],
    serverWatch: [
        'server',
        'watch'
    ]
};