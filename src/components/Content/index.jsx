import React from 'react';
import classnames from 'classnames';
import './style.less';

const Content = props =>
	<div {...props} className={classnames('page-content', props.className)} >
		{props.children}
	</div>;

Content.propTypes = {
	children: React.PropTypes.any.isRequired
};

export default Content;