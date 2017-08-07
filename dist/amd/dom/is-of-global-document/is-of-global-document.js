/*can-util@3.10.0-pre.0#dom/is-of-global-document/is-of-global-document*/
define([
    'require',
    'exports',
    'module',
    '../document/document'
], function (require, exports, module) {
    'use strict';
    var getDocument = require('../document/document');
    module.exports = function (el) {
        return (el.ownerDocument || el) === getDocument();
    };
});