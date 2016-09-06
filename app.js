var app = angular.module('madLib', []);

app.controller('mainCtrl', function ($scope) {

	$scope.inArr = [];
	$scope.master = function (input) {
		$scope.inArr.push(input);
		$scope.input = '';
		console.log($scope.inArr);
	}

	$scope.firstML = ['is a man that is ', ' feet tall. He lives in a house made of', '. All his friends call him ', '. This makes him very ', '. One day he decided to buy a pet ', '. He named it ', '. They became best friends and would ', ' together all day. They decided one day that they would move away to ', ' to become ', '. They lived happily ever after.'];

});



//"name" is a man that is "height" feet tall. He lives in a home made of "material". All his friends call him "nickname". This makes him very "feeling".  One day he decided to buy a pet "animal". He named it "pet name". They became best friends and would "verb" together all day. They decided one day that they would move away to "exotic location" to become "occupation (plural)". They lived happily ever after.