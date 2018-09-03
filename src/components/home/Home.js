import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import NoticeEdit from '../../components/notice/NoticeEdit';
import NoticeItem from '../../containers/notice/NoticeItemContainer';
import axios from 'axios';

class Home extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            noticeId: 0
        };
        this.btnAdd_Click = this.btnAdd_Click.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    };

    btnAdd_Click() {
        this.setState({ noticeId: 0 });
        this.refs.modal.setState({
            noticeId: 0,
            title: '',
            content: '',
            url: ''
        });
        this.refs.modal.open();
    }

    handleAdd(item) {
        this.props.addNotice(item);
        this.refs.modal.close();
        this.props.ContainerfetchNotices();
    }

    componentWillMount() {
        this.props.ContainerfetchNotices();
        //
        axios.get(`http://flashlightvn.com/api/Token?username=admin&password=123456`).then(response => {
            // If request is good...

        })
            .catch((error) => {
                console.log('Message error: ' + error);
            });
    }

    render() {
        const { notices, loading, error } = this.props.noticesList;
        if (notices === 'undefined' || loading) {
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        const noticeComponent = notices.map((notice) => (
            <NoticeItem key={notice.NoticeId}
                NoticeId={notice.NoticeId}
                Title={notice.Title}
                Content={notice.Content}
                Url={notice.Url}
            />
        ));

        return (
            <div>
                <Button onClick={this.btnAdd_Click} type="submit" className="btn btn-primary">Add</Button>
                <NoticeEdit addItem={this.handleAdd} ref="modal" />
                {noticeComponent}
            </div>
        );
    }
}
export default reduxForm({
    form: 'Home'
})(Home)


