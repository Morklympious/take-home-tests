// Driver.js
// A javascript file for general 
// body behavior of the page. 
//
// Author: Bradley Stafford
$(document).ready(function(){

    // Stop anchors from doing anything
    $('a').click(function(){
        return false;
    })

   // Touch the DOM once. 
    var boxes = $('.box-toggle'); 
    
    
    // Toggle the Price Boxes. 
    $('.box-toggle').click(function(){
       var $this = $(this);

        // Just simple show/hide, Slide is nice but also 
        // Not neccessarily warranted. 
        if($this.hasClass('active')){
            $this.siblings('.inner-box').toggleClass('active');
            $this.children('i').toggleClass('icon-down-dir').toggleClass('icon-right-dir');
            $this.toggleClass('active')
        }else{ 
            $this.siblings('.inner-box').toggleClass('active');
            $this.children('i').toggleClass('icon-right-dir').toggleClass('icon-down-dir');
            $this.toggleClass('active')
        }   

        
    }); 

}); 
