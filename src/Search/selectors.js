import {
    createSelector
} from 'reselect';
import Immutable from 'immutable';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    Map
} = Immutable;

const {
    getItems,
    getActiveName
} = actions;

const _getItems = state => state[NAME].get('items');
const _getActiveName = state => state[NAME].get('activeName');

export const getProductsSelector = createSelector(
    [_getItems, _getActiveName],
    (items, activeName) => {
        return {
            items,
            activeName
        };
    }
);

export function mapStateToProps(state) {
    return {
        items: getProductsSelector(state).items,
        activeName: getProductsSelector(state).activeName
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getActiveName(activeName) {
            dispatch(getActiveName(activeName));
        },
        getItems(query, type, page) {
            dispatch(getItems(query, type, page));
        }
    };
}
