import { connect } from 'react-redux';
import User from './component';
import {mapStateToProps, mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);