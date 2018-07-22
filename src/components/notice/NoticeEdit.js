import React, { Component } from 'react';
import { FormGroup, Button, Modal, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import { reduxForm, SubmissionError } from 'redux-form';

class NoticeEdit extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            noticeId: 0,
            title: '',
            content: '',
            url: ''
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);        
        this.input_noticeId = React.createRef();
        this.input_title = React.createRef();
        this.input_content = React.createRef();
        this.input_url = React.createRef();
    }

    close() {
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };

    handleSave() {
        if (typeof this.props.addItem === 'function') {
            this.props.addItem(
                {
                    NoticeId: this.state.noticeId,
                    Title: this.state.title,
                    Content: this.state.content,
                    Url: this.state.url
                }
            );
        }
    };

    getValidationState() {
        const length = this.state.title.length;
        if (length > 6) return 'success';
        else if (length > 4) return 'warning';
        else if (length > 0) return 'error';
        return null;
    };

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    };

    handleContentChange(e) {
        this.setState({ content: e.target.value });
    };

    handleUrlChange(e) {
        this.setState({ url: e.target.value });
    };

    render() {
        return (<div>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Update notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input hidden="hiden" ref={this.input_noticeId} defaultValue={this.state.noticeId}/>
                        <FormGroup validationState={this.getValidationState()}>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl id="title" type="text" placeholder="enter text" ref={this.input_title} defaultValue={this.state.title} onChange={this.handleTitleChange}/>
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Content</ControlLabel>
                            <FormControl id="content" rows="7" componentClass="textarea" ref={this.input_content} defaultValue={this.state.content} onChange={this.handleContentChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Url</ControlLabel>
                            <FormControl id="url" type="text" placeholder="enter url" ref={this.input_url} defaultValue={this.state.url} onChange={this.handleUrlChange}/>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSave} className="btn btn-primary">Save</Button>
                    <Button onClick={this.close} className="btn btn-default">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default NoticeEdit