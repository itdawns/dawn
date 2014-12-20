/** @jsx React.DOM */

var React = require('react');
var bs = require('react-bootstrap');

var OpenSmartphones = React.createClass({

	render: function() {
		return (<bs.Grid>
          <bs.Row>
            <bs.Col xs={12} md={12}>
			  <bs.PageHeader>OpenSmartphones</bs.PageHeader>
            </bs.Col>
          </bs.Row>
        </bs.Grid>);
	}

});

module.exports = OpenSmartphones;