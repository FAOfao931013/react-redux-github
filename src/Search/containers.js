import { connect } from 'react-redux';
import Search from './component';
import {mapStateToProps, mapDispatchToProps} from './selectors';

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default container;