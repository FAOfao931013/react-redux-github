import React from 'react';
import './style.less'

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="toolbar">
                <div className="toolbar-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


Toolbar.propTypes = {
    children: React.PropTypes.any
};

export default Toolbar;