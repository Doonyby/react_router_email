require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var MailBoxContainer = require('./components/mail-box-container');
var MailBox = require('./components/mail-box');
var MailList = require('./components/mail-list');
var Mail = require('./components/mail');

var routes = (
    <Router history={hashHistory}>
    	<Route path="/email" component={MailBoxContainer}>
    		<Route path="/email/:mailbox_name" component={MailBox} />  
    		<Route path="/email/:mailbox_name/:emailId" component={Mail} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});

