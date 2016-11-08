var React = require('react');
var EMAIL = require('../email');
var MailList = require('./mail-list');

var MailBox = function(props) {
    var box = EMAIL[props.params.mailbox_name];
    var specBox = props.params;
    return (
        <MailList whichBox={specBox} boxName={box} />
    )
}

module.exports = MailBox;


// var Contact = require('./contact');

// var ContactContainer = function(props) {
//     var contact = CONTACTS[props.params.contactId];
//     return <Contact id={contact.id} name={contact.name}
//                     phoneNumber={contact.phoneNumber} />;
// };

// module.exports = ContactContainer;

    // var mailbox = Object.keys(props.email).map(function(boxType, index) {
    //     var box = props.email[boxType];
    //     return (
    //         <li key={index}>
    //             <h2>{boxType}</h2>
    //             <MailList boxName={box} />
    //         </li>
    //     );
    // });
    // return (
    //     <ul>
    //         {mailbox}
    //     </ul>
    // );

