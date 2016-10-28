import React from 'react';
import './style.less';

class Placeholder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            text
        } = this.props;

        return (
            <div className='placeholder'>
                <div className='wrap'>
                    <p>You don't have any {text} yet.</p>
                </div>
            </div>
        );
    }
}

export default Placeholder;
