module.exports = {
    options: {
        spawn: false,
        livereload: true
    },
    scripts: {
        files: [
            'app/app.js',
            'app/core/**/*.js',
            'app/modules/**/*.js'
        ],
        tasks: [
            'concat', 'copy'
        ]
    },
    styles: {
        files: [
            'app/app.less'
        ],
        tasks: [
            'less:dev_app', 'autoprefixer', 'copy'
        ]
    }
};