var React = require('react')

var NavBar = React.createClass({

  handleClick: function () {
    console.log('Welcome')
  },

  render: function () {
    return (
      <div>
        <button className="btn btn-success" href="#" role="button" onClick={this.handleClick}>Link</button>
      </div>
    )
  }
})

module.exports = NavBar;