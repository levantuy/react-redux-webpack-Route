import { connect } from 'react-redux'
import { fetchNotices, fetchPostsSuccess, fetchPostsFailure } from '../../actions/action_home.js'
import Home from '../../components/home/Home.js'
import {reducer_fetchNotices} from '../../reducers'

const mapStateToProps = (state) => ({
  noticesList: state.homeReducer.noticesList
})

const mapDispatchToProps = (dispatch) => {
  return {
    ContainerfetchNotices: () => {
      dispatch(fetchNotices());
    }
  }
}

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(Home);