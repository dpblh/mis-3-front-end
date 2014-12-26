module.exports = {
    dev_bootstrap: {
        files: {
            'dist/styles/bootstrap.css': 'app/bower_components/bootstrap/less/bootstrap.less'
        }
    },
    prod_bootstrap: {
        options: {
            compress: true
        },
        files: {
            'dist/styles/bootstrap.css': 'app/bower_components/bootstrap/less/bootstrap.less'
        }
    },
    dev_app: {
        files: {
            'dist/styles/app.css': 'app/app.less'
        }
    },
    prod_app: {
        options: {
            compress: true
        },
        files: {
            'dist/styles/bootstrap.css': 'app/app.less'
        }
    }
};