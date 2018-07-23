import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ConfirmMesage from '../message/ConfirmMessage';
import { reduxForm } from 'redux-form';
import NoticeEdit from './NoticeEdit';

class NoticeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.btnEditClick = this.btnEditClick.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    clickHandler(){
        this.refs.confirmMessage.open('Xác nhận xóa dữ liệu!', 'Bạn có chắc chắn muốn xóa');     
    }

    btnEditClick(){        
        this.setState({ noticeId: this.props.NoticeId });
        this.refs.modal.setState({
            noticeId: this.props.NoticeId,
            title: this.props.Title,
            content: this.props.Content,
            url: this.props.Url
        });
        this.refs.modal.open();
    }   
    
    handleAdd(item){
        this.props.addNotice(item);
        this.refs.modal.close();
    }

    handleAccept(){
        this.props.deleteNotice(this.props.NoticeId);
        this.refs.confirmMessage.setState({
            showModal: false
        });
    };

    handleCancel(){
        this.refs.confirmMessage.setState({
            showModal: false
        });
    };

    render() {

        return (            
            <div>
                <NoticeEdit addItem={this.handleAdd} ref="modal"/>
                <ConfirmMesage onAccept={this.handleAccept} onCancel={this.handleCancel} ref="confirmMessage"></ConfirmMesage>
                <input type="hidden" value={this.props.NoticeId} />
                <h4>{this.props.Title}</h4>
                <pre>{this.props.Content}</pre>
                <a href={this.props.Url} className="pull-right" target="_blank">go to link</a>
                <br />
                <div className="form-group">
                    <span><Button className="btn btn-primary" onClick={this.btnEditClick}>Edit</Button> </span>
                    <Button className="btn btn-primary" onClick={this.clickHandler}>Delete</Button>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'NoticeItem'
})(NoticeItem)