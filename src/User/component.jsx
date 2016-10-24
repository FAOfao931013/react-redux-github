import React from 'react';
import Immutable from 'immutable';
import Header from 'components/Header';
import Content from 'components/Content';
import ListBlock from 'components/ListBlock';
import clearToolbar from 'common/clearToolbar';
import './style.less';

const {
    List,
    Item
} = ListBlock;


class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        clearToolbar();
        this.props.getUser(this.props.params.name);
    }

    render() {
        let {
            user
        } = this.props;

        return (
            <div className='user'>
                <Header
                    left={{
                        icon:'align',
                        size:{
                            width: 20,
                            height: 20
                        }
                    }}
                    center={{
                        icon:'github'
                    }}
                    right={{
                        icon:'bell',
                        size:{
                            width: 24,
                            height: 24
                        }
                    }} />
                {
                    user &&
                    <Content>
                        <List>
                            <Item media>
                                <div className='item-media'>
                                    <img src={user.get('avatar_url')} />
                                </div>
                                <div className='item-inner'>
                                    <div className='item-title login'>{user.get('login')}</div>
                                    <div className='name'>{user.get('name')}</div>

                                    <ul className='info'>
                                        {
                                            user.get('company') &&
                                            <li>{user.get('company')}</li>
                                        }

                                        {
                                            user.get('location') &&
                                            <li>{user.get('location')}</li>
                                        }

                                        {
                                            user.get('email') &&
                                            <li>{user.get('email')}</li>
                                        }

                                        {
                                            user.get('blog') &&
                                            <li>{user.get('blog')}</li>
                                        }

                                        {
                                            user.get('bio') &&
                                            <li>{user.get('bio')}</li>
                                        }

                                        {
                                            user.get('hireable') &&
                                            <li>{user.get('hireable')}</li>
                                        }
                                    </ul>

                                </div>
                            </Item>
                        </List>
                    </Content>
                }
            </div>
        );
    }
}

User.propTypes = {
    user: React.PropTypes.instanceOf(Immutable.Map)
};

export default User;
