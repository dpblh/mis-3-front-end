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
    second_dev: [
      'autoprefixer'
    ],
    second_prod: [
        'uglify',
        'autoprefixer'
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