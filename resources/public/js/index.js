require.config({paths: {Q: 'vendor/q/q'}});

require(['Car',
         'Animal',
        'Q'], 
function (Animal, Car, Q) {
	console.log("loaded", Animal, Car, Q);
	
	
	
});
