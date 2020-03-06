import { connect } from 'react-redux';
import Home from './Home';
import {
  getFacts
} from './action';

const mapStateToProps = state => ({
  factsData: state.HomeReducer.factsData,
  isLoading: state.HomeReducer.isLoading
});
const mapDispatchToProps = {
  getFacts
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
