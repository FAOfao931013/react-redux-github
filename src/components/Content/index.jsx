import React from 'react';
import './style.less';

const Content = (props) => <div className='page-content'>{props.children}</div>;

Content.propTypes = {
    children: React.PropTypes.any.isRequired
};

export default Content;