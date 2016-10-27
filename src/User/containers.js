import { connect } from 'react-redux';
import ShopGoods from './component';
import {mapStateToProps, mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopGoods);