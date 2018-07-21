import { connect } from 'react-redux'
import { fetchNotices } from '../../actions/action_home.js'
import Home from '../../components/home/Home.js'
import {reducer_fetchNotices} from '../../reducers'

export default connect(
  state => ({ noticesList: reducer_fetchNotices(state) }),
  { ContainerfetchNotices: fetchNotices }
)(Home);