exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject) {
  		resolve(value);
  	})

  },

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve, reject) {
  		var xhr = new XMLHttpRequest();
  		xhr.onreadystatechange = function() {
  			if (xhr.readyState === 4 && xhr.status === 200) {
  				var data = JSON.parse(xhr.responseText);
  				var names = data.people.map(function(elem) {
  					return elem.name;
  				}).sort();
  				resolve(names);
  			}
  		}
  		xhr.open('GET', url, true);
  		xhr.send();
  	})

  }
};
