var React = require('react');

var Mail = require('mail');

var MailList = function(props) {
    var mails = Object.keys(props.mails).map(function(mailId, index) {
        var mail = props.mails[mailId];
        return (
            <li key={index}>
                <Mail id={contact.id} name={contact.name}
                         phoneNumber={contact.phoneNumber} />
            </li>
        );
    });
    return (
        <ul>
            {contacts}
        </ul>
    );
};

module.exports = ContactList;