(function(){
'use strict'

var contact = {

	firstName: '',
	lastName: '',
	telephone: '',
	address: '',
	city: '',
	state: '',
};	// end of object

var ContactManager = {

	createContact: function() {
		var contact = {firstName: 'Homer', lastName: 'Simspon'}

		console.log(contact.firstName);

	},

	store: function(contact) {
		// shove into local storage
	}
};

$('#btnAddContact').click(function() {
	ContactManager.createContact();

	
});


})();