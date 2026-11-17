const e = require("./deep_equality");

function formatMessage(isPassed, title, input) {
    const symbol = isPassed ? "✅" : "❌";
    const failingInputMaybe = isPassed ? '' : input;

    const message = `${symbol} -- ${title} \n`;
    return [message, failingInputMaybe];
}

function test(testCase) {
    const output = e.isEqual(testCase.input1, testCase.input2);
    const isPassed = output === testCase.expected;
    const input = {
        "Input1": testCase.input1,
        "Input2": testCase.input2
    };

    const message = formatMessage(isPassed, testCase.title, input);
    return message;
}

function testIsEqual(testCases) {
    for (const testCase of testCases) {
        const message = test(testCase);
        console.log(message[0], message[1] !== undefined ? message[1] : '');
    }
}

function main() {

    const emptyCombinationTests = [
        {
            title: "Empty Array",
            input1: [],
            input2: [],
            expected: true
        },
        {
            title: "Empty objects",
            input1: {},
            input2: {},
            expected: true
        },
        {
            title: "Empty Array and empty Object",
            input1: [],
            input2: {},
            expected: false
        }
    ];
    const nullAndUndefinedTests = [
        {
            title: "both NaN should be equal",
            input1: NaN,
            input2: NaN,
            expected: true
        },
        {
            title: "both undefined should be equal",
            input1: undefined,
            input2: undefined,
            expected: true
        },
        {
            title: "both null should be equal",
            input1: null,
            input2: null,
            expected: true
        },
        {
            title: "check for undefined and null",
            input1: undefined,
            input2: null,
            expected: false
        },
        {
            title: "check for null and string",
            input1: null,
            input2: "a",
            expected: false
        },
        {
            title: "object with undefined property",
            input1: { a: undefined },
            input2: { b: 1 },
            expected: false
        },
        {
            title: "object with undefined property",
            input1: { a: 1 },
            input2: { b: undefined },
            expected: false
        },
        {
            title: "check with null value",
            input1: { a: 1 },
            input2: { a: null },
            expected: false
        }
    ];
    const arrayAndObjectsTests = [
        {
            title: "Array with single element ",
            input1: [1],
            input2: [1],
            expected: true
        }
        , {
            title: "Array with multiple element",
            input1: [1],
            input2: [1, 2],
            expected: false
        }
        , {
            title: "number and  string ",
            input1: 1,
            input2: "1",
            expected: false
        }, {
            title: "same object ",
            input1: { a: 1 },
            input2: { a: 1 },
            expected: true
        }, {
            title: "object with same input but different keys",
            input1: { a: 1 },
            input2: { b: 1 },
            expected: false
        }, {
            title: "object with array",
            input1: { a: [1] },
            input2: { a: [1] },
            expected: true
        }, {
            title: "nested object ",
            input1: { a: { b: 1, c: 4 } },
            input2: { a: { b: 1, c: 4 } },
            expected: true
        }, {
            title: "shuffled object entities ",
            input1: { a: 3, b: 2 },
            input2: { b: 2, a: 3 },
            expected: true
        }, {
            title: "check array and objects with indices",
            input1: { 0: 2 },
            input2: [1],
            expected: false
        }
    ];

    testIsEqual(emptyCombinationTests);
    testIsEqual(nullAndUndefinedTests);
    testIsEqual(arrayAndObjectsTests);
}

main();