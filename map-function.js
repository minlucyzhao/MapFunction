//Map Function 
//Goal: A higher-order function that creates a new array with the results of calling a function on each element

//Higher-Order Function
var map = function(dataArray, callback) {
    var newDataArray = [];
    dataArray.forEach(function(element) {
        newDataArray.push(callback(element));
    });
    console.log(newDataArray);
}

//Given:
var words = ["ground", "control", "to", "major", "tom"];

//Result: [6, 7, 2, 5, 3]
map(words, function(word) {
  return word.length;
});

//Result: [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
map(words, function(word) {
  return word.toUpperCase();
});

//Result: [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
map(words, function(word) {
  return word.split('').reverse().join('');
});s