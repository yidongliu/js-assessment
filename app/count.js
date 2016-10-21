exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	for (var i = start; i <= end; i++) {
  		(function(i) {setTimeout(function() {
  			console.log(i);
  		}, 100);
	  	})(i)
  	}
  }
};
