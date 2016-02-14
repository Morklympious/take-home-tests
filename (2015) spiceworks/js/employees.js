/*
* Employees
*   A module used for operations related to creating, initializing,
*   and adding new employees to an existing list on the DOM. 
*
*   I basically wanted to go for a design that would allow 
*   you to add properties to an Object that could reflect properties 
*   handed to you from whatever API would return the Employee data.
*   Which in turn would allow you to map to a DOM element in the template
*   in index.html
*
*   I mean, I don't know why I'm telling you this now. You'll figure it
*   out when you get to the code. but I'm just being proactive. DON'T 
*   FAULT ME ON THAT. Comments are good. but now these comments are 
*   becoming inane. Oops. 
*
*   Also, the API for this module runs kind of light just because I 
*   didn't want to expose the entire module since some of this stuff just 
*   happens internally. Since we're really only caring about the result of
*   These operations I didn't see it fit to expose certain methods.
*
*   Methods that are simulated as private are prefixed with '_'
*/

window.employees = window.employees || (function($){

    // Use strict because it makes my code better. For free.
    "use strict";

    /*
    * DEFAULTS
    *  An object used as a set of fallbacks when certain
    *  properties of employees return undefined. This 
    *  gives us an object local to employee functions that
    *  allows us to define fallbacks for propertiies. 
    *
    */ 
    var DEFAULTS = {
        photo_url: 'img/default.png',
        name: 'Anonymous'
    }

    /* 
    *  Template map
    *   Used by the employee module to map 
    *   Object properties of the employee into 
    *   the proper locations in the HTML template.
    *
    *   RATIONALE: The employee Object has both a 'name' and 
    *   'photo_url' property, making coding for this
    *   fairly easy, but I created this mapping to 
    *   make it such that you could add more properties to 
    *   the user object HERE and map them to the markup in the
    *   template. 
    *
    *   This template allows me to store the arbitrary stuff here.
    *   Y'know. So the other stuff can just be generic and DRY. 
    */
    var tmpMap = {
        name: {
            type: 'text',
            target: '.employee-name'
        },
        photo_url: {
            type: 'src',
            target: '.employee-avatar'
        }
        // Your_property
    }

    /* 
    *  DOM references
    *   Jquery references to DOM objects that we'll be 
    *   using for this page 
    */
    var eBaseTmp = $('#employee-template');



    /*
    *  initEmployees
    *
    *   A function that takes an array of data
    *   and makes calls to createEmployee function
    *   to create a list item. 
    *   
    *   param eObjs
    *     An Object containing a JSON array of 
    *     employee data
    *
    *   returns eNodes
    *     An Object containing List-item DOM nodes
    *     of the template-generated employees
    *
    *
    *   See also: createEmployee
    */
    function initEmployees(eObjs) {
        var eNodes = [];

        $.each(data, function(index, element) {
            var eData = this;
            var eNode = createEmployee(eData);

            eNodes.push(eNode);
        });

        return eNodes;
    }

    /*
    *  createEmployee
    *
    *   A function that takes a single employee Object
    *   and references the template map to find out 
    *   the DOM element it needs to modify based on an
    *   arbitrated 'mapping'
    *    
    *   
    *   param eObj
    *     An Object containing data about a 
    *     single employee
    *
    *   returns eTmp
    *     An DOM element with all of the data filled
    *    
    *
    *
    *   See also: _insertProperty
    */
    function createEmployee(eObj) {

        // Store the HTML of eBaseTmp for use
        var eTmp = $(eBaseTmp.html());

        // Enumerate through the properties of the Template map.
        // These properties are the same as those for the
        // employees. 
        $.each(tmpMap, function(key, data){

            // Iterates through Name, photo_url, etc. 
            _insertProperty(key, data, eTmp, eObj)
        })
      
        return eTmp; 
    }

    /*
    *  _addEmployee (internal method)
    *
    *   A function that takes a single DOM element
    *   (or multiple, in an array) and splits the
    *   execution into one of two functions. 
    *
    *   param list
    *       a jQuery selector specifying the list
    *       to populate.
    *   
    *   param eNode
    *       a jQuery element (li) representing an
    *       employee
    */
    function addEmployee(list, eNode) {
        if(typeof eNode === "Array")
            _addMultipleEmployees(list, eNode);
        else
            _addSingleEmployee(list, eNode);
    }

    /*
    *  _addSingleEmployee (internal method)
    *
    *   A function that takes a single DOM element
    *   and populates a supplied DOM List element. 
    *
    *   param list
    *       a jQuery selector specifying the list
    *       to populate.
    *   
    *   param eNode
    *       a jQuery element (li) representing an
    *       employee
    */
    function _addSingleEmployee(list, eNode) {
        $(list).prepend(eNode);
    }

    /*
    *  _addMultipleEmployees (internal method)
    *
    *   A function that takes an array of DOM elements
    *   and populates a supplied DOM List element. 
    *
    *   param list
    *       a jQuery selector specifying the list
    *       to populate.
    *   
    *   param eNodes
    *       a collection of jQuery elements (li) 
    *       representing employees
    */
    function _addMultipleEmployees(list, eNodes) {
        // Unimplemented due to single entry form
    }

    /*
    *  removeEmployee 
    *
    *   A function that takes an event object and
    *   uses it to determine the Employee DOM element
    *   that should be deleted.
    *
    *   param e
    *       The event object representing the clicked
    *       close button
    */
    function removeEmployee(e) {
        var removeBtn = $(e.target);
        var empCard = removeBtn.closest('.employee');

        empCard.fadeOut(400, this.remove);
    }

    /*
    *  _insertProperty (internal method)
    *
    *   A function that takes several parameters
    *   and uses these to determine how to set the 
    *   data for an employee as well as access the 
    *   target DOM element to manipulate.    
    *   
    *   param empProperty
    *     The property in the Template map currently
    *     being iterated over.
    *   
    *   param data
    *     The data associated with that key in the
    *     template map, ex. if empProperty is 'name'
    *     then data is {type: 'text', target: '.employee-name'}
    *   
    *   param eTmp
    *     The HTML template in a jQuery wrapper
    *
    *   param eObj
    *     The Object containing the data needed to populate
    *     the template. 
    *
    *   returns void
    *     This method only modifies eTmp
    *    
    */
    function _insertProperty(empProperty, data, eTmp, eObj) {

        // The 'type' of data we're using
        // As well as the target for that data.
        var type = data['type'];
        var target = data['target'];

        // HTML Template, data object
        var template = eTmp;
        var empData = eObj;
        var isProp = empData.hasOwnProperty(empProperty);

        // Determine if the map has a property that
        // The data does not. 
        if(!isProp) {
            console.error("You've specified a property ("+ empProperty +") in your template map that does not exist in the supplied data.");
            return;
        }

        // Switch on type so we can conditionally
        // use jQuery's text() or attr()
        switch(type) {
            case 'text':
                template.find(target).text(empData[empProperty] || DEFAULTS[empProperty]);
                break;
            case 'src':
                template.find(target).attr('src', empData[empProperty] || DEFAULTS[empProperty]);
                template.find(target).on('error', function(){

                    // Remove handler because we don't really want it after
                    // we know there's a 404.
                    $(this).off();
                    $(this).attr('src', DEFAULTS[empProperty]); // Set default image. 
                })
                break;
        }
    }

    // Exposed API. 
    return {
        init: initEmployees, 
        create: createEmployee,
        add: addEmployee,
        remove: removeEmployee
    }

}(jQuery));