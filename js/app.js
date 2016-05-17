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

	createContact: function() {
		
		console.log(contact.firstName);

	},

	validateInput: function() {

	},

	store: function(contact) {
		// shove the contact object into local storage

    	var newLi = $('<li>');
    	newLi.append(contact.lastName + ', ' + contact.firstName);
    	newLi.append($('<button>Details</button>').attr({'class': 'btnDetail'}));

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

$('.btnDetail').click(function() {
	console.log('detail clicked');
});


})();