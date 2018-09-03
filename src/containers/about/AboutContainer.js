import { connect } from 'react-redux';
import About from '../../components/about/About';
import { fetchInformation } from '../../actions/action_about';

const mapStateToProps = (state) => ({
  aboutState: state.aboutReducer.aboutState
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchInformation: () => {
      dispatch(fetchInformation()); // but let other comps know
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)