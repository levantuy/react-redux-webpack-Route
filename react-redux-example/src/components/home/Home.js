import React, { Component, PropTypes } from 'react';
import { fetchNotices } from '../../actions/action_home';
import { reduxForm, Field, SubmissionError } from 'redux-form';

//For any field errors upon submission (i.e. not instant check)
const btnAdd_Click = (values, dispatch) => {
    return dispatch(fetchNotices());
}

class Home extends Component {
    constructor(props, context) {
        super(props);
        this.state = {

        };
    };

    componentWillMount() {
        this.props.fetchNotices();
    }

    render() {
        // const { notices, loading, error } = this.props.noticesList;
        const cc = this.props.noticesList;
        const { handleSubmit, submitting } = this.props;
        // const noticesElement = notices.map((notice) => {
        //     <p>
        //         {notice.Title}
        //     </p>                
        // });


        return (
            <div>
                <form onSubmit={handleSubmit(btnAdd_Click.bind(this))}>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Update Email</button>
                    {/* {noticesElement} */}
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'Home'
})(Home)


