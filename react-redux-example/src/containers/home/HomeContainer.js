import { connect } from 'react-redux'
import { fetchNotices, fetchNoticesSuccess, fetchNoticesFailure } from '../../actions/action_home.js'
import Home from '../../components/home/Home'

const mapStateToProps = (state) => {
  return { 
    noticesList: state.homeReducer.noticesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotices: () => {
      dispatch(fetchNotices()).then((response) => {
        !response.error ? dispatch(fetchNoticesSuccess(response.payload.data)) : dispatch(fetchNoticesFailure(response.payload.data));
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)