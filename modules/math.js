// Each function can be exported seperately, but this is time wasting and unclean

export var add = function(n1, n2) {
    return n1 + n2;
}

export var divide = function(n1, n2) {
    return n1 / n2;
}

export var subtract = function(n1, n2) {
    return n1 * n2;
}

export var PI = 3.1415;

// instead of doing this we could just do the following

var add = function(n1, n2) {
  return n1 + n2;
}

var divide = function(n1, n2) {
  return n1 / n2;
}

var subtract = function(n1, n2) {
  return n1 - n2;
}

var multiply = function(n1, n2) {
  return n1 * n2;
}

var PI = 3.1415;

export {
  add,
  divide,
  subtract,
  multiply,
  PI
}
