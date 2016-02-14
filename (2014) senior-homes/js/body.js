// Body.js 
// Author: Bradley Stafford
//
// This is a javascript document that 
// blankets the general behavior of the webpage

$(document).ready(function() {
	
	// Initialize the Tablesorter plugin on the table in this page. 
	$("table#leftTable").tablesorter();

	
	// Searching function -- Code sourced from http://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table
	var $rows = $('#leftTable tbody tr'); 
	
		// On 'keyup' (a keypress just finished) execute the following:
		$('#search').keyup(function() {
			
			var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

			$rows.show().filter(function(){
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
				return !~text.indexOf(val);
			}).hide();
	});
	

	
	// Prevents any hyperlinks in the table from resetting the browser window
	// to the top of the screen.
	 $('section.tabledata > a').on("click", function (e) {
		e.preventDefault();
	});

	// if the only hyperlink nested under .tabledata is clicked...
	$('section.tabledata > a.show, section.tabledata > a.hide').click(function(){
		
		// If the hyperlink has the 'show' class (the table is visible)
		if( $(this).hasClass('show') ){
			
			// Slide the containing element up and fade out the search elements. 
			// In smaller window views, the other content will slide up to replace it
			$(".tablecontainer").slideUp(400)
			$("#search, #searchanchor").fadeOut(200);
			
			// Disable the search bar. 
			$("#search").prop('disabled', true);
			
			// Toggle both the hide and show class
			// If it's applied, it will be removed, and vice versa. 
			$(this).toggleClass('hide');
			$(this).toggleClass('show');
			
		}
		else{
			// Slide the table down 
			// and fade in its search elements
			$(".tablecontainer").slideDown(400);
			$("#search, #searchanchor").fadeIn(200);
			
			// re-enable the search bar. 
			$("#search").prop('disabled', false);
			
			// Toggle both the hide and show class
			// If it's applied, it will be removed, and vice versa. 
			$(this).toggleClass('hide');
			$(this).toggleClass('show');
		}
		

	});
	
	// Behavior to force the screen to scroll to the top when the button to scroll
	// to the top is clicked. 
	$('a.backtotop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 300);
		return false;
    });
	
	
	
});