/*can-util@3.1.0#js/is-iterable/is-iterable*/
define(function (require, exports, module) {
    var types = require('can-types');
    module.exports = function (obj) {
        return obj && !!obj[types.iterator];
    };
});