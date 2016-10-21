exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
    return function(str2) {
      if (str2 === undefined) {
        return str;
      } else {
        return str + ', ' + str2;
      }
    }

  },

  makeClosures: function(arr, fn) {
    var closures = [];
    for (var i = 0; i < arr.length; i++) {
      closures.push(function() {
        fn(arr[i]);
      });
    }

    return closures;

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
