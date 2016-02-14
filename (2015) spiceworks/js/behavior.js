/* 
	Lo and behold, it was declared that the heavens of code were in need
	of a behavior module to store all of the listeners and associated 
	behavior on the page, and BRADLEY MADE IT SO.

	Thunderous brass and confetti fell from the sky for ten days as bountiful Coffee
	and Netflix were had. 

	I know, you're probably sick of the tone of my comments already. 
*/

window.behavior = window.behavior || (function($, employees) {

	// Use strict because it makes my code better. For free.
	"use strict";

	// Employee list module global. 
	var employeeList = $('.js.employee-list')

	/* 
	*	Init method just in case we need to initialize
	* 	more than once in the lifetime of the page.
	*
	*
	*	You're probably thinking, "BUT BRAD. WHY?"
	*	The answer is BECAUSE I LIKE THE OPTION TO.
	*	Really, what if all of the listeners just get WIPED
	*	by some malicious script!? then we can REINITIALIZE.
	*
	*	AND THEN BAM. I'VE SAVED THE DAY.
	*/
	function init() { 
		// init to winit.

		// I'm gonna use some event delegation to make it LIGHTWEIGHT. 
		// FEATHERWEIGHT UP IN THIS.
		$('.js.event-delegator')
			.on('submit', '.js.employee-form', _formSubmission)
			.on('click', '.js.employee-remove', employees.remove);

		// It's nice because we're attaching a listener to a single DOM
		// Element. I don't do any of that 'listener for every list item'
		// stuff. I'm not about that life. No sir. Or ma'am. 
	}

	/*
    *  _formSubmission (internal method)
    *
 	* 	A function that takes data from a form
 	*	and uses it to create a new employee to 
 	* 	add to a list, it then clears all fields
    *
    *   param e
    *       an event object used to get a hold of the
    *		form we'll be referencing
    *   
    *	returns false
    *		Prevents the default behavior of form submission.
    *		(which is a page refresh)
    */
	function _formSubmission(e) {

		var form = $(e.delegateTarget);
		var inputs = form.find('.js.input');
		var data = _gatherInputs(inputs);

		employees.add(employeeList, employees.create(data));

		clearInputs(inputs);

		// This prevents the page from refreshing since a button
		// with a submit type will cause a refresh.
		return false;
	}

	/*
    *  _gatherInputs (internal method)
    *
    *   A function that takes a collection of
    *   inputs, and using their name attribute
    * 	defines a property on an object with the
    * 	value being the value of the input field.
    *
    *   param inputs
    *       A collection of input DOM elements
    *		(name attribute is required.)
    *   
    *	returns data
    *		an object with key/value pairs that is compatible
    *		in mapping to the employee template. 
    */
	function _gatherInputs(inputs) {

		var data = {};

		inputs.each(function(index, element) {
			var input = $(this);
			var prop = input.attr('name');

			if(!prop){
				console.error('<input> element at index: ' + index + ' has no name attribute!');
				return;
			}

			data[prop] = input.val();
		});

		return data;
	}

	/*
    *  clearInputs 
    *
    *   A function that takes a collection of
    *   inputs, enumerates over them, and clears them.
    *	This method is made public because maybe you'll
    *	want to call it some other time than submitting!
    *
    *   param inputs
    *       A collection of input DOM elements
    *		
    */
	function clearInputs(inputs) {
		inputs.each(function(index, element){
			var input = $(this);
			input.val('') || input.text('');
		})

		// This returns nothing.
		// ARE YOU NOT ENTERTAINED?
	}
	
	// Exposed API
	return {
		init: init,
		clearInputs: clearInputs
	}

}(jQuery, window.employees))