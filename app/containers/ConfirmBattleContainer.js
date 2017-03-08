const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function() {
    const query = this.props.location.query
    // Fetch info from GitHub the update state
  },

  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playerInfo}/>
    )
  }
})

module.exports = ConfirmBattleContainer;
