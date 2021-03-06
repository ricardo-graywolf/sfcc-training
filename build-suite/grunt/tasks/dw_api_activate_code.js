'use strict';

const OcapiUtils = require('../lib/util/dw_api_utils');

/**
 * Grunt module calling SFCC Code Activation via Data API
 *
 * @param {Grunt} grunt
 */
module.exports = function (grunt) {
    let done;
    let options;

    /**
     * Callback function triggering the actual Code Version activation
     *
     * @param {String} token
     */
    let activateCodeVersion = function activateCodeVersion(token) {
        let codeApi = require('sfcc-ci').code;

        codeApi.activate(options.baseUrl, options.version, token, function (error) {
            if (error != null) {
                grunt.fail.fatal(`Unable to activate code version: "${error}"`);
            } else {
                grunt.log.ok('Code version active.');
            }

            done();
        });
    };


    /**
     * Grunt Task: Calls OCAPI Auth, triggers Code activation afterwards.
     */
    grunt.registerTask('dw_api_activate_code', 'Executes ocapi commands to activate a specific codeversion.', function () {
        done = this.async();
        options = this.options();

        let utils = new OcapiUtils(grunt);
        utils.auth(activateCodeVersion);
    });
};
