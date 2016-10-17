var React = require('react')
var Body = require('./components/body.jsx')
var Footer = require('./components/footer.jsx')
var NavBar = require('./components/navbar.jsx')

var App = React.createClass({

  render: function() {

    return (
      <div>
        <NavBar />
        <Body />
        <Footer />
      </div>
    )
  }
})

module.exports = App;