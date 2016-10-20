exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(prev, cur) {
      return prev + cur;
    }, 0);
  },

  remove: function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0 ; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.length = arr.length - 1;
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;

  },

  duplicates: function(arr) {
    var len = arr.length;
    var obj = {};
    var result = [];

    for (var i = 0; i < len; i++) {
      if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] += 1;
      }

      if (obj[arr[i]] === 2) {
        result.push(arr[i]);
      }

    }

    return result;
  },

  square: function(arr) {
    var newArr = arr.map(function(elem) {
      return elem * elem;
    });

    return newArr;

  },

  findAllOccurrences: function(arr, target) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        res.push(i);
      }
    }
    return res;
  }
};
