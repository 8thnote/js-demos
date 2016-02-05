/*global angular*/
'use strict';
	
angular.module('app', ['ngMessages']);
	
	
angular.module('app').controller('MainCtrl', function mainCtrl() {
	var vm = this;
	
	vm.cbl1 = {
		fName: "",
		lName: "",
		email: "",
		passphrase: "",
		demoCheck: "",
		another1: "",
		another2: ""
	};
	
	vm.appStep = 1;
	
	vm.fillStep1 = function() {
		if (vm.appStep === 1) {
			vm.cbl1.fName = "Your First";
			vm.cbl1.lName = "Your Last";
			vm.cbl1.email = "your@email.com";
			vm.cbl1.passphrase = "areyouwantingtosavetime?orareyouLazy?";
			vm.cbl1.demoCheck = true;
		}
		else if (vm.appStep === 2) {
			vm.cbl1.another1 = "another";
			vm.cbl1.another2 = "and another";
		}
	};
	
	vm.stepForward = function() {
		vm.appStep++;
	};
	
	vm.stepBackward = function() {
		vm.appStep--;
	};
});

angular.module('app').directive('formButtons', function() {
	return {
		restrict: 'AE',
		scope: {
			currentForm: '=',
			forwardCb: '&',
			backwardCb: '&',
			currentStep: '=',
			totalSteps: '='
		},
		templateUrl: 'buttons.html'
	}	
});