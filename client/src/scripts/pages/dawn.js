/** @jsx React.DOM */

var React = require('react');
var bs = require('react-bootstrap');

var Dawn = React.createClass({

	render: function() {
		return (<bs.Grid>
          <bs.Row>
            <bs.Col xs={12} md={12}>
			  <bs.PageHeader>Dawn</bs.PageHeader>
			  <p>Dawn is Awesome. I love Dawn

			  penguins</p>
            </bs.Col>
          </bs.Row>
        </bs.Grid>);
	}

});

module.exports = Dawn;