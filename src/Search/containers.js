import { connect } from 'react-redux';
import Search from './component';
import {mapStateToProps, mapDispatchToProps} from './selectors';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);