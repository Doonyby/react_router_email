var React = require('react');
var router = require('react-router');
var Link = router.Link;
var Mail = require('./mail');
var EMAIL = require('../email');

var MailList = function(props) {
    var whichBox = props.whichBox.mailbox_name;
    var mails = Object.keys(props.boxName).map(function(mailId, index) {
        var mail = props.boxName[mailId];
        return (
            <li key={index}>
                <strong>
                    <Link to={'/email/' + whichBox + '/' + mail.id}>
                        {mail.from}
                    </Link>
                </strong>
                <br />
                {mail.title}
                <br />
            </li>
        );
    });
    return (
        <ul>
            {mails}
        </ul>
    );
};

module.exports = MailList;