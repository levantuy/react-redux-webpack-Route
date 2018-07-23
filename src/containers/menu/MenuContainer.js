import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../../components/menu/Menu';
import { searchNotice } from '../../actions/action_home';



const mapStateToProps = (state) => ({
  noticesList: state.homeReducer.noticesList
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchNotice: (searchText)=>{
      dispatch(searchNotice(searchText));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
