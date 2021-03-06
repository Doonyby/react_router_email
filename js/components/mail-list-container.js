var React = require('react');

var CONTACTS = require('../contacts');

var ContactContainer = function(props) {
    var contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};
