var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {
    return {
        files: [
            { pattern: 'src/**/*.js', load: false }
        ],

        tests: [
            { pattern: 'test/**/*.js', load: false }
        ],

        postprocessor: webpackPostprocessor,

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};