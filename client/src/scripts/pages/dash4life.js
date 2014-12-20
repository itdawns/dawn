/** @jsx React.DOM */

var React = require('react');
var bs = require('react-bootstrap');

var Dash4Life = React.createClass({

	render: function() {
		return (<bs.Grid>
          <bs.Row>
            <bs.Col xs={12} md={12}>
			  <bs.PageHeader>Dash4Life</bs.PageHeader>
            </bs.Col>
          </bs.Row>
        </bs.Grid>);
	}

});

module.exports = Dash4Life;