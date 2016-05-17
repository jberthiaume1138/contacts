(function(){
'use strict'

var Contact = {

	firstName: '',
	lastName: '',
	telephone: '',
	address: '',
	city: '',
	state: '',
	country: ''
};

var ContactManager = {

	validateInput: function() {
		//TODO
	},

	store: function(contact) {
		// store the new contact object into local storage

		// display the new contact in a list with all others
    	var newLi = $('<li>');
    	newLi.append(contact.lastName + ', ' + contact.firstName);


    	$('#list-of-contacts').append(newLi);

		if(typeof(Storage) !== "undefined") {
    		localStorage.setItem('contact',JSON.stringify(contact));
		} 
		else {
			console.log('ERROR');
		}
		console.log(JSON.parse(localStorage.getItem('contact')));
	}
}; // end of ContactManager object


$('#btnAddContact').click(function() {
	//TODO: input validation

	var contact = {};

	contact.firstName = $('#first-name').val();
	contact.lastName = $('#last-name').val();
	contact.telephone = $('#telephone').val();
	contact.address = $('#address').val();
	contact.city = $('#city').val();
	contact.state = $('#state').val();
	contact.country = $('#country').val();

	ContactManager.store(contact);
});



})();