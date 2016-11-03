var React = require('react');

var Mail = function(props) {
    return (
        <div>
            <strong>
                {props.from}
            </strong>
            &nbsp;
            {props.title}
        </div>
    );
};

module.exports = Mail;