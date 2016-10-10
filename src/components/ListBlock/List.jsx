import React from 'react';
import classNames from 'classnames';

function List(props) {

    const cn = classNames('list-block', props.className, {});

    return (
        <div className={cn}>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

List.propTypes = {
    children: React.PropTypes.any
};

export default List;