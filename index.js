const returnFirstTwoDrivers = function(scuberArray) {
    return scuberArray.slice(0,2);
}

const returnLastTwoDrivers = function(scuberArray) {
    const arrayLength = scuberArray.length
    return scuberArray.slice(arrayLength-2, arrayLength);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
    return function(fare) {
        return fare * multiple;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberArray, returnFunction) {
    if (returnFunction === selectingDrivers[0]) {
        return returnFirstTwoDrivers(scuberArray);
    } else if (returnFunction === selectingDrivers[1]) {
        return returnLastTwoDrivers(scuberArray);
    }
}

// - `selectingDrivers` — This is an array containing two elements: the two
//   functions that we previously defined (`returnFirstTwoDrivers()` and
//   `returnLastTwoDrivers()`).
// - `createFareMultiplier()` — This is a higher-order function that takes in one
//   argument, an integer, and returns a function that will multiply a fare for a
//   ride accordingly. For example, if `createFareMultiplier()` receives an argument
//   of `4`, it will return a function that takes in a fare as an argument and
//   quadruples the fare.
// - `fareDoubler()` — Declare a variable with `const` and assign a function
//   returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
//   such a way that the new `fareDoubler()` function accepts a fare as its lone
//   argument and doubles it.
// - `fareTripler()` — Declare a variable with `const` and assign a function
//   returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
//   such a way that the new `fareTripler()` function accepts a fare as its lone
//   argument and triples it.
// - `selectDifferentDrivers()` — This function takes two arguments, an array of
//   the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
//   `returnLastTwoDrivers()` function. Based on these two arguments,
//   `selectDifferentDrivers()` will return either the first two drivers or the
//   last two drivers.