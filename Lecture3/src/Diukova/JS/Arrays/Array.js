var array = [5, 6, 9, 1, 15, 3, 11, 27, 8, 16, 30, 45, 4];

function sortArray(array) {
    array.sort(function (a, b) {
        return b - a;
    });
}

function getSubArrayFromHead(array) {
    return array.slice(0, 5);
}

function getSubArrayFromTail(array) {
    return array.slice(array.length - 5);
}

function getArrayEvenElementsSum(array) {
    return array.filter(function (elem) {
        return (elem % 2) === 0;
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0);
}

sortArray(array);
console.log(array.join(","));

var subArrayHead = getSubArrayFromHead(array);
console.log(subArrayHead.join(","));

var subArrayTail = getSubArrayFromTail(array);
console.log(subArrayTail.join(","));

var arrayEvenElementsSumResult = getArrayEvenElementsSum(array);
console.log(arrayEvenElementsSumResult);

var bigArray = [];

for (var i = 0; i < 100; ++i) {
    bigArray.push(i + 1);
}

function getSquareOfArrayEvenElements(array) {
    return array.filter(function (elem) {
        return (elem % 2) === 0;
    }).map(function (item) {
        return Math.pow(item, 2);
    });
}

console.log(bigArray.join(","));

var squared = getSquareOfArrayEvenElements(bigArray);
console.log(squared.join(","));