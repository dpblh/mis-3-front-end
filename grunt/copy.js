module.exports = {
    styles: {
        files: [{
            expand: true,
            dest: 'app/assets/style',
            src: '*.css',
            cwd: 'dist/styles/'
        }]
    },
    scripts: {
        files: [{
            expand: true,
            dest: 'app/assets/javascript',
            src: '*.js',
            cwd: 'dist/scripts/'
        }]
    }
};