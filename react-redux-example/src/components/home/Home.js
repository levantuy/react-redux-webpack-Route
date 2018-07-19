import React, { Component, PropTypes } from 'react';
import { fetchPosts } from '../../actions/action_home';
import { reduxForm, Field, SubmissionError } from 'redux-form';

//For any field errors upon submission (i.e. not instant check)
const btnAdd_Click = (values, dispatch) => {
    return dispatch(fetchPosts(values));
}

class Home extends Component {

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(btnAdd_Click.bind(this))}>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}>
                        Update Email
          </button>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'Home'
})(Home)


