import React from 'react';
import './style.less';

const path = require('path');

function Icon(props) {

	// console.log(path.join(__dirname, '../src')+ '/img/icon/');

    const src = path.join(__dirname, '../src') + '/img/icon/' + props.name + '.png';

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
