import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, incrementAsync, decrement, decrementAsync} from '../../actions/action_home.js'
import Home from '../../components/home/Home'

const mapStateToProps = ({ action_home }) => ({
  count: action_home.count,
  isIncrementing: action_home.isIncrementing,
  isDecrementing: action_home.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)