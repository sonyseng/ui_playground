require.config({
	paths: {
		Q: 'vendor/q/q',
		jquery: 'vendor/jquery/jquery'
	}
});

require(['jquery', 'Q'],
	function ($, Q) {
		console.log("Testing the Q Promises Library")
		
		function getData() {
			var deferred = Q.defer();
			
			$.get("/a").done(onSuccess).fail(onError);
			
			function onSuccess(data) { deferred.resolve(data); }
			function onError(data) { deferred.reject(data); }
			
			return deferred.promise;
		}
		
		function getData() {
			var promise = Q($.get("/a"));
		
		getData().then(function (data) { console.log("Getting Data", data); }, function (data) { console.log("Error", data); });
});
