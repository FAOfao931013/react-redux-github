import React from 'react';
import Immutable from 'immutable';
import Header from 'components/Header';
import Content from 'components/Content';
import ListBlock from 'components/ListBlock';
import clearToolbar from 'common/clearToolbar';
import Tab from 'components/Tab';
import './style.less';

const {
    List,
    Item
} = ListBlock;

const tabs = [{
    activeName: 'overview',
    title: 'Overview'
}, {
    activeName: 'repositories',
    title: 'Repositories'
}, {
    activeName: 'stars',
    title: 'Stars'
}, {
    activeName: 'followers',
    title: 'Followers'
}, {
    activeName: 'following',
    title: 'Following'
}];


class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        clearToolbar();
        this.props.getUser(this.props.params.name);
        this.props.getUserRep(this.props.params.name);
        this.props.changeActiveName(tabs[0].activeName);
    }

    changeTabHandler(activeName) {
        this.props.changeActiveName(activeName);
    }

    renderOverView(user, reps) {
        return (
            <div className='overview'>
                <div className='user-item'>
                    <div className='user-img'>
                        <img src={user.get('avatar_url')} />
                    </div>
                    <div className='user-info'>
                        <h1 className='login'>{user.get('login')}</h1>
                        <h3 className='name'>{user.get('name')}</h3>
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
                </div>
                <div className='reps-wrap'>
                    <h2 className='reps-title'>
                        Popular repositories
                    </h2>
                    <List className='user-reps'>
                        {
                            reps.map(rep => (
                                <Item key={rep.get('id')}>
                                    <div className='item-inner'>
                                        <div className='item-title full-name'>
                                            {rep.get('full_name')}
                                        </div>
                                        <div className='item-after star-count'>
                                            {rep.get('stargazers_count')}
                                            <span>★</span>
                                        </div>
                                    </div>
                                </Item>
                            ))
                        }
                    </List>
                </div>
            </div>
        );
    }

    render() {
        let {
            user,
            reps,
            activeName
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
                    <div className='tabs-wrap'>
                        <Tab
                            tabs={tabs}
                            activeName={tabs[0].activeName}
                            onChange={_activeName => this.changeTabHandler(_activeName)} />
                    </div>
                    <Content>
                        {
                            activeName === tabs[0].activeName && user && reps &&
                            this.renderOverView(user, reps)
                        }
                    </Content>
            </div>
        );
    }
}

User.propTypes = {
    user: React.PropTypes.instanceOf(Immutable.Map)
};

export default User;
