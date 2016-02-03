(function() {

	'use strict';
	
	var app = angular.module('formlyExample', ['formly', 'formlyBootstrap', 'mgo-angular-wizard'], function config(formlyConfigProvider) {
		// set templates here
		formlyConfigProvider.setType({
			name: 'whatever',
			template: 'your template'
		});
	});
	
	
	app.controller('MainCtrl', function ($http, WizardHandler) {
	
		var vm = this;
		
		// function assignment
		vm.finishWizard = finishWizard;
		
		vm.formVisible = true;
		vm.ratesVisible = false;
		
		
		vm.exitValidation = function(form) {
			return form && !form.$invalid;
		};
		
		vm.progressForm = function() {
			WizardHandler.wizard().next();
			$('form').find('input:first').focus();	
		};
		
		vm.getLoan = function() {
			alert("Yay! You're getting a loan!");	
		};
		

		vm.fields = {
			step1: [
				{
					className: 'section-label',
					template: '<div class="row"><div class="col-xs-12"><strong>Your Name Please:</strong></div></div>'
				},
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-sm-6',
							key: 'fname',
							type: 'input',
							templateOptions: {
								label: '',
								type: 'text',
								placeholder: 'First Name',
								required: true
							}
						},
						{
							className: 'col-sm-6',
							key: 'lname',
							type: 'input',
							templateOptions: {
								label: '',
								type: 'text',
								placeholder: 'Last Name',
								required: true
							}
						}
					]
				},
				{
					className: 'section-label',
					template: '<div class="row"><div class="col-xs-12"><strong>Address:</strong></div></div>'
				},
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-xs-12',
							key: 'street',
							type: 'input',
							templateOptions: {
								label: 'Street',
								type: 'text',
								placeholder: 'Street',
								required: true
							}
						},
						{
							className: 'col-sm-4',
							key: 'city',
							type: 'input',
							templateOptions: {
								label: 'City',
								type: 'text',
								placeholder: 'City',
								required: true
							}
						},
						{
							className: 'col-sm-4 formly-select',
							key: 'state',
							type: 'select',
							defaultValue: "",
							templateOptions: {
								label: 'State',
								required: true,
								options:[
									{
										name: "State", //todo: fade placeholder
										value: "",
										className: 'fade'
									},
									{
										name: "Alabama",
										value: "AL"
									},
									{
										name: "Alaska",
										value: "AK"
									},
									{
										name: "Connecticut",
										value: "CT"
									},
									{
										name: "Etc...",
										value: "ETC"
									}
								]
							}
						},
						{
							className: 'col-sm-4',
							key: 'zip',
							type: 'input',
							templateOptions: {
								label: 'Zip',
								type: 'number',
								placeholder: 'Zip',
								required: true,
								max: 99999,
								min: 0,
								pattern: '\\d{5}'
							}
						}
					]
				}
			],
			step2: [
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-xs-12',
							key: 'income',
							type: 'input',
							templateOptions: {
								label: 'Annual Income',
								type: 'text',
								placeholder: 'Annual Income',
								required: true
							}
						}
					]
				},
				{
					className: 'section-label',
					template: '<div class="row"><div class="col-xs-12"><strong>Date of Birth:</strong></div></div>'
				},
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-sm-4 formly-select',
							key: 'dob-month',
							type: 'select',
							defaultValue: "",
							templateOptions: {
								label: '',
								required: true,
								options:[
									{
										name: "Month", //todo: fade placeholder
										value: "",
									},
									{
										name: "January",
										value: "Jan"
									},
									{
										name: "February",
										value: "Feb"
									},
									{
										name: "March",
										value: "March"
									},
									{
										name: "Etc...",
										value: "ETC"
									}
								]
							}
						},
						{
							className: 'col-sm-4 formly-select',
							key: 'dob-day',
							type: 'select',
							defaultValue: "",
							templateOptions: {
								label: '',
								required: true,
								options:[
									{
										name: "Day", //todo: fade placeholder
										value: "",
									},
									{
										name: "1",
										value: 1
									},
									{
										name: "2",
										value: 2
									},
									{
										name: "3",
										value: 3
									},
									{
										name: "Etc...",
										value: "ETC"
									}
								]
							}
						},
						{
							className: 'col-sm-4 formly-select',
							key: 'dob-year',
							type: 'select',
							defaultValue: "",
							templateOptions: {
								label: '',
								required: true,
								options:[
									{
										name: "Year", //todo: fade placeholder
										value: ""
									},
									{
										name: "1998",
										value: 1998
									},
									{
										name: "1997",
										value: 1997
									},
									{
										name: "1996",
										value: 1996
									},
									{
										name: "Etc...",
										value: "ETC"
									}
								]
							}
						},
					]
				},
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-sm-6',
							key: 'email',
							type: 'input',
							templateOptions: {
								label: 'Email Address',
								type: 'text',
								placeholder: 'Email Address',
								required: true
							}
						},
						{
							className: 'col-sm-6',
							key: 'password',
							type: 'input',
							templateOptions: {
								label: 'Password',
								type: 'password',
								placeholder: 'Password',
								required: true
							}
						}
					]
				},
			],
			step3: [
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'col-sm-6 main-field',
							key: 'ssn',
							type: 'input',
							templateOptions: {
								label: '',
								type: 'text',
								placeholder: 'Your Social Security #',
								required: true
							}
						}
					]
				},
				{
					className: 'more-info',
					template: '<div class="row"><div class="col-xs-12"><p class="center">Explanation for why we need their social would go here...</p></div></div>'
				},
				{
					className: 'row',
					fieldGroup: [
						{
							className: 'center-checkbox',
							key: 'terms',
							type: 'checkbox',
							templateOptions: {
								label: 'I agree to the terms of use', //todo: figure out how to insert html
								required: true
							}
						},
						{
							className: 'center-checkbox',
							key: 'creditAuth',
							type: 'checkbox',
							templateOptions: {
								label: 'I agree to have my credit pulled', //todo: figure out how to insert html
								required: true
							}
						}
					]
				},
			]
		};
		
		vm.originalFields = angular.copy(vm.fields);
		
		// function definition
		function finishWizard() {
			// alert(JSON.stringify(vm.model), null, 2);
			
			// vm.ratesText = "Just a few moments...";
			
			$http.get('rates.json')
				.then(function successCallback(response) {
					vm.rates = response.data;
					console.log(vm.rates);
					// vm.ratesText = "Congratulations! You Qualify for a Loan";
				}, function errorCallback(response) {
					//error handling goes here
				});
			
			vm.formVisible = false;
			vm.ratesVisible = true;
		}
	});

})();