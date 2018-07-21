import React, { Component, PropTypes } from 'react';
// import { fetchNotices, fetchNoticesSuccess, fetchNoticesFailure } from '../../actions/action_home';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Button } from 'react-bootstrap';

//For any field errors upon submission (i.e. not instant check)
// const btnAdd_Click = (values, dispatch) => {
//     return dispatch(fetchNotices()).then(result => {
//         // Note: Error's "data" is in result.payload.response.data (inside "response")
//         // success's "data" is in result.payload.data
//         if (result.payload.response && result.payload.response.status !== 200) {
//             dispatch(fetchNoticesFailure(result.payload.response.data));
//             throw new SubmissionError(result.payload.response.data);
//         }
//         //let other components know that everything is fine by updating the redux` state
//         dispatch(fetchNoticesSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
//     });
// }
const btnAdd_Click = (values, dispatch) => {

}

class Home extends Component {
    constructor(props, context) {
        super(props);
        this.state = {

        };
    };

    componentWillMount() {
        this.props.ContainerfetchNotices();
    }

    renderNotices(notices) {
        const { handleSubmit, submitting } = this.props;

        return notices.map((notice) => {
            return (
                <div key={notice.NoticeId}>
                    <input type="hidden" value={notice.NoticeId} />
                    <h4>{notice.Title}</h4>
                    <pre>{notice.Content}</pre>
                    <a href={notice.Url} className="pull-right" target="_blank">go to link</a>
                    <br />
                    <form onSubmit={handleSubmit(btnAdd_Click.bind(this))}>
                        <div className="btn-toolbar text-center">
                            <button type="submit" className="btn btn-primary" disabled={submitting}>Edit</button>
                            <button type="submit" className="btn btn-primary" disabled={submitting}>Delete</button>
                        </div>
                    </form>
                </div>
            );
        });
    }

    render() {
        const { notices, loading, error } = this.props.noticesList;        
        if (notices === 'undefined' || loading) {
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        const { handleSubmit, submitting } = this.props;

        return (

            <div>
                <form onSubmit={handleSubmit(btnAdd_Click.bind(this))}>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
                </form>
                {this.renderNotices(notices)}
            </div>
        );
    }
}
export default reduxForm({
    form: 'Home'
})(Home)


