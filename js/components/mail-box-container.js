var React = require('react');
var router = require('react-router');
var EMAIL = require('../email');
var Link = router.Link;

var MailBoxContainer = function(props) {
	var title = "TeamWoz's Email";
	var mailbox = Object.keys(EMAIL).map(function(boxType, index) {
		var box = EMAIL[boxType];
		return (
			<li key={index}>
				<h2>
					<Link to={'/email/' + boxType}>
                    	{boxType}
                    </Link>
                </h2>
            </li>
		)
	});
    return (
    	<div>
    		<h1>{title}</h1>
	        <ul>
	            {mailbox}
	        </ul>
        	{props.children}
    	</div>
    );
};

module.exports = MailBoxContainer;