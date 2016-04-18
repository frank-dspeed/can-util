/*can-util@3.0.0-pre.0#js/is-array-like/is-array-like*/
function isArrayLike(obj) {
    var length = obj && typeof obj !== 'boolean' && typeof obj !== 'number' && 'length' in obj && obj.length;
    return typeof arr !== 'function' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);
}
module.exports = isArrayLike;