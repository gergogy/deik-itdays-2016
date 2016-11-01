exports.clone = clone;
exports.update = update;

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function update(o, n, expetcs) {
    if (!expetcs) {
        expetcs = ['id', 'password'];
    } else {
        expetcs.push('id');
    }
    expetcs.forEach(function(key) {
        delete n[key];
    });
    for (var key in n) {
        o[key] = n[key];
    }
}