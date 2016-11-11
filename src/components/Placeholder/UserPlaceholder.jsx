import React from 'react';
import './style.less';

const UserPlaceholder = ({text}) =>
        <div className='user-placeholder'>
            <div className='wrap'>
                <p>You don't have any {text} yet.</p>
            </div>
        </div>;

export default UserPlaceholder;