import { connect } from 'react-redux'
import { fetchNotices, addNotice } from '../../actions/action_home.js'
import Home from '../../components/home/Home.js'

const mapStateToProps = (state) => ({
  noticesList: state.homeReducer.noticesList
})

const mapDispatchToProps = (dispatch) => {
  return {
    // add
    addNotice: (item)=>{
      dispatch(addNotice(item));
    },
    // show
    ContainerfetchNotices: () => {
      dispatch(fetchNotices());
    }
  }
}

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(Home);