import Immutable from 'immutable';

export default localStorage => {
	return Immutable.fromJS(localStorage, (key, value) => {
		const isIndexed = Immutable.Iterable.isIndexed(value);
		return isIndexed ? value.toList() : value.toMap();
	});
};