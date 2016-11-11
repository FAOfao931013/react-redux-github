import React from 'react';
import classNames from 'classnames';

const Item = ({
	className,
	media,
	children,
}) => {

	const cn = classNames('item-content', className, {
		media: media
	});

	return <li className={cn}>{children}</li>;
};

Item.propTypes = {
	children: React.PropTypes.any
};

export default Item;