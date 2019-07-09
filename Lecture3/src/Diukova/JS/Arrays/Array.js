var array = [5, 6, 9, 1, 15, 3, 11, 27, 8, 16, 30, 45, 4];

function arraySort(array) {
    array.sort(descendingSort);

    function descendingSort(a, b) {
        return b - a;
    }
}

function subArrayFromHead(array) {
    return array.slice(0, 5);
}

function subArrayFromTail(array) {
    return array.slice(array.length - 5);
}

function arrayEvenElementsSum(array) {
    function evenNumbersFilter(array) {
        return array.filter(function (elem) {
            return (elem % 2) === 0;
        });
    }

    var evenArr = evenNumbersFilter(array);
    return evenArr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
}

arraySort(array);
console.log(array.join(","));

var subArrayHead = subArrayFromHead(array);
console.log(subArrayHead.join(","));

var subArrayTail = subArrayFromTail(array);
console.log(subArrayTail.join(","));

var arrayEvenElementsSumResult = arrayEvenElementsSum(array);
console.log(arrayEvenElementsSumResult);

var bigArray = [];

for (var i = 0; i < 100; ++i) {
    bigArray[i] = i + 1;
}

function squaredArray(array) {
    var result = [];

    function evenNumbersFilter(array) {
        return array.filter(function (elem) {
            return (elem % 2) === 0;
        });
    }

    var filteredArray = evenNumbersFilter(array);
    filteredArray.forEach(function (item, i, filteredArray) {
        result[i] = Math.pow(filteredArray[i], 2);
    });
    return result;
}

console.log(bigArray.join(","));

var squared = squaredArray(bigArray);
console.log(squared.join(","));