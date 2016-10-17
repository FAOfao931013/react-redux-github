import React from 'react';
import './style.less';

function Icon(props) {

    const src = '../src/img/icon/' + props.name + '.png';

    return (
        <img
            className='img-icon'
            src={src}
            style={props.style}
            alt='icon' />
    );
}

Icon.propTypes = {
    children: React.PropTypes.any
};

export default Icon;
