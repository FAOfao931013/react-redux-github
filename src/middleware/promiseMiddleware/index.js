const promiseMiddleware = () => (next) => (action) => {
	const {
		promise,
		type,
		...rest,
	} = action;
	if (!promise) {
		return next(action);
	}

	const [REQUEST, SUCCESS, FAILURE] = type;

	next({
		...rest,
		type: REQUEST,
		isFetching: true,
	});
	return promise.then(
		(result) => {
			next({
				...rest,
				result,
				type: SUCCESS,
				isFetching: false,
			});
		},
		(error) => next({
			...rest,
			error,
			type: FAILURE,
			isFetching: false,
		})
	);
};

export default promiseMiddleware;