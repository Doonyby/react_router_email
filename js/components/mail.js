var React = require('react');
var EMAIL = require('../email');

var Mail = function(props) {
    var mail = EMAIL[props.params.mailbox_name][props.params.emailId];
    return (
        <div>
            From: {mail.from}
            <br />
            To: {mail.to}
            <br />
            Subject: {mail.title}
            <br />
            Content: {mail.content}
        </div>
    );
};

module.exports = Mail;