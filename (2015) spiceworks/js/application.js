// Here's the initial data. Again: don't worry about persistence :)
/*
*   Well, I can certainly say I'm not worried about persistence!
*   You sure we shouldn't just throw this bad boy into local storage?
*   Maybe session storage? I'M JUST KIDDING. 
*   WHAT IF YOU GUYS GOTTA SUPPORT IE8? Well, then. I apologize. 
*   but I know that struggle. 
*
*   I'm going to leave this here: IE8 sucks. #hateonthe8
*/
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

// The DOM has loaded. 
$(document).ready(function(employees, behavior) {

  // The list we'll be populating.
	var empList = $('.js.employee-list');

  // Generate Initial employee data
	var empItems = employees.init(data); 

	// Add the employees to a list. 
	$.each(empItems, function(index, element) {
		var emp = $(this);
		employees.add(empList, emp);
	});

  // Initialize the behavior module, setting up all
  // of our event listeners and associated behavior.
  behavior.init();

}(window.employees, window.behavior))
