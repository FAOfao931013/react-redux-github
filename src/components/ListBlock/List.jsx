import React from 'react';
import classNames from 'classnames';

const List = ({
	className,
	children,
}) => {

	const cn = classNames('list-block', className, {});

	return (
		<div className={cn}>
            <ul>
                {children}
            </ul>
        </div>
	);
};

List.propTypes = {
	children: React.PropTypes.any
};

export default List;