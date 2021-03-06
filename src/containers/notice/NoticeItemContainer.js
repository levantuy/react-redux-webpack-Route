import { connect } from 'react-redux'
import { updateNotice, deleteNotice } from '../../actions/action_home.js'
import NoticeItem from '../../components/notice/NoticeItem';

const mapStateToProps = (state) => ({
  noticesList: state.homeReducer.noticesList
})

const mapDispatchToProps = (dispatch) => {
  return {     
    // add
    addNotice: (item)=>{
      dispatch(updateNotice(item));
    },   
    //delete
    deleteNotice: (noticeId)=>{
      dispatch(deleteNotice(noticeId));
    }
  }
}

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(NoticeItem);