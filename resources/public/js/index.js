require.config({
	paths: {
		Q: 'vendor/q/q',
		jquery: 'vendor/jquery/jquery'
	}
});

require(['jquery', 'Q'],
	function ($, Q) {
		console.log("Testing the Q Promises Library")
		
		function getData(num) {
			var deferred = Q.defer();
			
			$.get("/"+ num).done(onSuccess).fail(onError);
			
			function onSuccess(response) { deferred.resolve(response.data); }
			function onError(response) { deferred.reject(data); }
			
			return deferred.promise;
		}
		
		// Perform simple asynchronous requests
		getData(1).then(function (num) { console.log("Getting num", num); }, function (num) { console.log("Error", num); });
		getData(2).then(function (num) { console.log("Getting num", num); }, function (num) { console.log("Error", num); });
		getData(3).then(function (num) { console.log("Getting num", num); }, function (num) { console.log("Error", num); });
		getData(4).then(function (num) { console.log("Getting num", num); }, function (num) { console.log("Error", num); });
		
		// Add Numbers asynchronously
		Q.all([getData(1), getData(2), getData(3), getData(4)]).spread(function (a, b, c, d) { 
			var sum = a+b+c+d; 
			console.log(sum);
			return sum; 
		});
});
