var React = require('react');

var Notes = React.createClass({
    render: function () {
        return (
            <div>
                <p>NOTESS</p>
                <p>{this.props.notes}</p>
            </div>
        )
    }
});

module.exports = Notes;