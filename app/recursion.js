exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var list = [];
    iterate(data, list);
    return list;

    function iterate(data, res) {
      for (var key in data) {
        if (typeof data[key] !== 'object') {
          if (data[key].indexOf('.') > -1) {
            res.push(data[key]);
          }
        } else {
          iterate(data[key], res);
        }
      }
    }

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n <= 1) {
      return n;
    }

    if (n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },

  validParentheses: function(n) {

  }
};
