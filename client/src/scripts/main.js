/** @jsx React.DOM */

var React = require('react');


var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var RouteHandler = Router.RouteHandler;

/* React Router 

  DefaultRoute Link NotFoundRoute Redirect Route RouteHandler 
  
  HashLocation HistoryLocation RefreshLocation

  ImitateBrowserBehavior ScrollToTopBehavior

  Navigation State

  create run

  History
*/

var bs = require('react-bootstrap');

var Pages = require('./pages')

require('../styles/main.scss');

var App = React.createClass({  
  mixins: [ Router.Navigation ],

  handleSelect: function(selectedKey) {
    switch (selectedKey) {
      case 'dawn':
        this.transitionTo('/');
        break;
      case 'dash4life':
     	  this.transitionTo('dash4life');
        break;
      case 'school-in-a-box':
        this.transitionTo('school-in-a-box');
        break;
      case 'startup-in-a-box':
        this.transitionTo('startup-in-a-box');
        break;
      case 'meshnet-in-a-box':
        this.transitionTo('meshnet-in-a-box');
        break;
      case 'open-smartphones':
        this.transitionTo('open-smartphones');
        break;
      case 'open-tablets':
        this.transitionTo('open-tablets');
        break;
    }

  },

  render: function() {
    return (
    	<div className="app">    		
		    <bs.Navbar>
		      <bs.Nav onSelect={this.handleSelect}>
		        <bs.NavItem eventKey="dawn" href="#">Dawn</bs.NavItem>
		      </bs.Nav>
		      <bs.Nav right onSelect={this.handleSelect}>
		      	<bs.NavItem eventKey="dash4life" href="#">Dash4Life</bs.NavItem>
		      	<bs.DropdownButton title="In A Box">
		          <bs.MenuItem eventKey="school-in-a-box">School</bs.MenuItem>
		          <bs.MenuItem eventKey="startup-in-a-box">Startup</bs.MenuItem>
		          <bs.MenuItem eventKey="meshnet-in-a-box">Meshnet</bs.MenuItem>
		        </bs.DropdownButton>

		      	<bs.DropdownButton title="OpenBoard">
		          <bs.MenuItem eventKey="open-smartphones">Smartphones</bs.MenuItem>
		          <bs.MenuItem eventKey="open-tablets">Tablets</bs.MenuItem>
		        </bs.DropdownButton>
		      </bs.Nav>
		    </bs.Navbar>
        <RouteHandler />        
		</div>
    );
  }
});

var routes = (
  <Route handler={App}>      
    <DefaultRoute handler={Pages.Dawn} />
    <Route name="dash4life" path="dash4life" handler={Pages.Dash4Life} />    
    <Route name="school-in-a-box" path="school-in-a-box" handler={Pages.SchoolInabox} />
    <Route name="startup-in-a-box" path="startup-in-a-box" handler={Pages.StartupInabox} />
    <Route name="meshnet-in-a-box" path="meshnet-in-a-box" handler={Pages.MeshnetInabox} />
    <Route name="open-smartphones" path="open-smartphones" handler={Pages.OpenSmartphones} />
    <Route name="open-tablets" path="open-tablets" handler={Pages.OpenTablets} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

