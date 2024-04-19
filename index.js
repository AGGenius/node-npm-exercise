// Require the lodash library here in this line
const _ = require('lodash');

function sum(a, b) {
  // 1 Use de add() function from lodash to sum the two numbers
  return _.add(a,b);
}

function filterFalsyValues(arr) {
  // 2 Use the compact() function from lodash to filter the array
  return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  // 3 Use the difference() function from lodash to get the difference between the two arrays
  return _.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  // 4 Use the fill() function from lodash to fill the array with the value
  return _.fill(arr, value);
}

function calculateMean(arr) {
  // 5 Use the mean() function from lodash to calculate the mean of the array
  return _.mean(arr);
}

function camelCase(str) {
  // 6 Use the camelCase() function from lodash to convert the string to camelCase
  return _.camelCase(str);
}

function capitalize(str) {
  // 7 Use the capitalize() function from lodash to capitalize the string
  return _.capitalize(str);
}

function sortByNames(arr) {
  // 8 Use the sortBy() function from lodash to sort the array by name
  return _.sortBy(arr, "name");
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  return _.mean(_.flatten(arr));
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
  const sortArr = _.sortBy(arr, 'name');
  const sortCapArr = [];

  sortArr.forEach(item => {
    sortCapArr.push(_.capitalize(item.name));
  })
  
  return sortCapArr;
}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  return [_.toUpper(_.snakeCase(arr))];
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};
