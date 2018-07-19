import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from '../../components/about'

const mapStateToProps = ({ action_about }) => ({
  load: action_about.load,
  isIncrementing: action_about.isIncrementing,
  isDecrementing: action_about.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  load
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)