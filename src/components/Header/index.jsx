import React from 'react';
import { connect } from 'react-redux';
import { push, go } from 'react-router-redux';
import Icon from 'components/Icon';
import './style.less';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    go(event, history) {
        if (event === 'back') {
            this.props.dispatch(go(-1));
        } else {
            this.props.dispatch(go(history));
        }
    }

    goto(url) {
        if (url) {
            this.props.dispatch(push(url));
        } else {
            return;
        }
    }

    render() {
        let {
            left,
            center,
            right,
            } = this.props;

        const iconSize = {
            width: 28, height: 28
        };

        return (
            <div className='header'>
                <div className='navbar'>
                    <div className='navbar-inner'>
                        <div
                            className='left link'
                            onClick={() => this.go(left.event)}>
                            {
                                left.icon ?
                                    <Icon
                                        name={left.icon}
                                        style={left.size ? left.size : iconSize} />
                                    : left.text
                            }
                        </div>

                        <div className='center'>
                            {
                                center.icon ?
                                    <Icon
                                        name={center.icon}
                                        style={center.size ? center.size : iconSize} />
                                    : center.text
                            }
                        </div>

                        <div
                            className='right link'
                            onClick={() => this.goto(right.url)}>
                            {
                                right.icon ?
                                    <Icon
                                        name={right.icon}
                                        style={right.size ? right.size : iconSize} />
                                    : right.text
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    left: React.PropTypes.object.isRequired,
    center: React.PropTypes.object.isRequired,
    right: React.PropTypes.object.isRequired
};


export default connect()(Header);