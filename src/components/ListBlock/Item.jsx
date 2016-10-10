import React from 'react';
import classNames from 'classnames';

function Item(props) {

    const cn = classNames('item-content', props.className, {
        media: props.media
    });

    return (
        <li className={cn}>
            {props.children}
        </li>
    );
}

Item.propTypes = {
    children: React.PropTypes.any
};

export default Item;