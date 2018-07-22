import { connect } from 'react-redux'
import { addNotice, deleteNotice, fetchNotices } from '../../actions/action_home.js'
import NoticeItem from '../../components/notice/NoticeItem';

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {     
    // add
    addNotice: (item)=>{
      dispatch(addNotice(item));
    },   
    //delete
    deleteNotice: (noticeId)=>{
      dispatch(deleteNotice(noticeId));
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
)(NoticeItem);