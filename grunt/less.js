module.exports = {
    dev_bootstrap: {
        files: {
            '.temp/styles/bootstrap.css': 'app/bower_components/bootstrap/less/bootstrap.less'
        }
    },
    prod_bootstrap: {
        options: {
            compress: true
        },
        files: {
            '.temp/styles/bootstrap.css': 'app/bower_components/bootstrap/less/bootstrap.less'
        }
    },
    dev_app: {
        files: {
            '.temp/styles/app.css': 'app/app.less'
        }
    },
    prod_app: {
        options: {
            compress: true
        },
        files: {
            '.temp/styles/app.css': 'app/app.less'
        }
    }
};