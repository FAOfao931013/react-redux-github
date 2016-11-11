import React from 'react';
import './style.less';

function UserPlaceholder(props) {
    return (
        <div className='user-placeholder'>
            <div className='wrap'>
                <p>You don't have any {props.text} yet.</p>
            </div>
        </div>
    );
}

export default UserPlaceholder;