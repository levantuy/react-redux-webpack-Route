import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from '../../components/about'

const mapStateToProps = (state) => ({
  load: state.load,
  isIncrementing: state.isIncrementing,
  isDecrementing: state.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  load
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)