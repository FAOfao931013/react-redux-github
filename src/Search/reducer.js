import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
import toImmutable from 'common/toImmutable';

const {
	Map,
	List
} = Immutable;

const {
	SEARCH_ITEMS,
	SEARCH_ACTIVENAME
} = actionTypes;

const initialState = Map({
	items: List(),
	activeName: 'users'
});

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_ITEMS:
			return state.set('items', toImmutable(action.items));
		case SEARCH_ACTIVENAME:
			return state.set('activeName', action.activeName);
		default:
			return state;
	}
};