
function areObjects(value1, value2) {
    if (value1 === null || value2 === null) return false;
    if (typeof value1 === 'object' && typeof value2 === 'object') {
        return isEqual(Array.isArray(value1), Array.isArray(value2));
    }
}

function areObjectEqual(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    for (const key of Object.keys(object1)) {
        if (!(key in object2)) return false;
        if (!isEqual(object1[key], object2[key])) return false;
    }
    return true;
}

function isEqual(value1, value2) {
    if (areObjects(value1, value2)) return areObjectEqual(value1, value2);
    return value1 === value2;
}

module.exports = {
    isEqual,
};