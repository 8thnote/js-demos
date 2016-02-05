/*global angular*/
'use strict';
	
angular.module('app', ['ngMessages']);
	
	
angular.module('app').controller('MainCtrl', function mainCtrl($scope) {
	var vm = this;
	
	vm.appStep = 1;
	
	vm.finish = function() {
		vm.appStep = 10;	
	};
	
	
	
	$scope.step = 1;
	
	$scope.stepForward = function() {
		$scope.step++;
	};
	
	$scope.stepBackward = function() {
		$scope.step = 1;
	};
});