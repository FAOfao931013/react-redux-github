import React from 'react';

function rootNode(props) {
    return <div>{props.children}</div>;
}

rootNode.propTypes = {
    children: React.PropTypes.any.isRequired
};

export default rootNode;