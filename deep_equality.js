
function type(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (value === NaN) return "NaN";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

function areObjectEqual(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    for (const key of Object.keys(object1)) {
        if (!(key in object2)) return false;
        if (!isEqual(object1[key], object2[key])) return false;
    }
    return true;
}
function areTypeEqual(value1, value2) {
    return type(value1) === type(value2);
}

function areValueEqual(value1, value2) {
    return value1 === value2;
}

function areArrayEqual(value1, value2) {
    if (value1.length !== value2.length) return false;
    for (let i = 0; i < value1.length; i++) {
        if (!isEqual(value1[i], value2[i])) return false;
    }
    return true;
}

function isEqual(value1, value2) {

    if (!areTypeEqual(value1, value2)) return false;

    switch (type(value1)) {
        case "number":
            return areValueEqual(value1, value2);
        case "string":
            return areArrayEqual(value1, value2);
        case "null":
            return areValueEqual(value1, value2);
        case "NaN":
            return areValueEqual(value1, value1);
        case "undefined":
            return areValueEqual(value1, value1);
        case "array":
            return areArrayEqual(value1, value2);
        case "object":
            return areObjectEqual(value1, value2);
    }

    return value1 === value2;
}

module.exports = {
    isEqual,
};