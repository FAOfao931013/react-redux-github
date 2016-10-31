import React from 'react';
import Immutable from 'immutable';
import Header from 'components/Header';
import Content from 'components/Content';
import ListBlock from 'components/ListBlock';
import clearToolbar from 'common/clearToolbar';
import Tab from 'components/Tab';
import Placeholder from 'components/Placeholder';
import languageColor from 'common/languageColor';
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

        switch (activeName) {
            case tabs[2].activeName:
                this.props.getUserStars(this.props.params.name);
            case tabs[4].activeName:
                this.props.getUserFollowings(this.props.params.name);
            default:
                return;
        };
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

    renderLanguageColor(language) {
        let _color;
        languageColor.map((color, lan) => {
            if (lan === language) _color = color;
        });
        return (
            <div
                className='language-color'
                style={{backgroundColor:_color}}></div>
        );
    }

    renderRepos(reps) {
        return (
            <List className='repositories'>
            {
                reps.map(rep => (
                    <Item key={rep.get('id')}>
                        <div className='item-inner'>
                            <div className='item-title full-name'>
                                {rep.get('full_name')}
                            </div>
                            <div className='star-language'>
                                <div className='star-count'>
                                    <span>★</span>
                                    {rep.get('stargazers_count')}
                                </div>
                                <div className='language'>
                                {this.renderLanguageColor(rep.get('language'))}
                                    {rep.get('language')}
                                </div>
                            </div>
                        </div>
                    </Item>
                ))
            }
            </List>
        );
    }

    renderStars(stars) {
        return (
            <List className='stars'>
                {
                    stars.map(star => (
                        <Item key={star.get('id')}>
                            <div className='item-inner'>
                                <div className='item-title full-name'>
                                    {star.get('full_name')}
                                </div>
                                <div className='des'>
                                    {star.get('description')}
                                </div>
                                <div className='star-language'>
                                    <div className='star-count'>
                                        <span>★</span>
                                        {star.get('stargazers_count')}
                                    </div>
                                    <div className='language'>
                                    {this.renderLanguageColor(star.get('language'))}
                                        {star.get('language')}
                                    </div>
                                </div>
                            </div>
                        </Item>
                    ))
                }
            </List>
        );
    }

    renderFollowings(followings) {
        return (
            <List className='followings'>
                {
                    followings.map(fol => (
                        <Item key={fol.get('id')}>
                            <div className='item-media'>
                                <img src={fol.get('avatar_url')} />
                            </div>
                            <div className='item-inner'>
                                <div className='item-title'>
                                    {fol.get('name')}
                                    <span>{fol.get('login')}</span>
                                </div>
                                <div className='location'>
                                    {fol.get('location')}
                                </div>
                            </div>
                        </Item>
                    ))
                }
            </List>
        );
    }

    render() {
        let {
            user,
            reps,
            activeName,
            stars,
            followings
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
                    <Content>
                        <div className='tabs-wrap'>
                            <Tab
                                tabs={tabs}
                                activeName={tabs[0].activeName}
                                onChange={_activeName => this.changeTabHandler(_activeName)} />
                        </div>
                        {
                            activeName === tabs[0].activeName && user && reps &&
                            this.renderOverView(user, reps)
                        }

                        {
                            activeName === tabs[1].activeName && reps ?
                                reps.size === 0 ?
                                <Placeholder text={tabs[1].activeName} />
                                : reps && this.renderRepos(reps)
                            : null
                        }

                        {
                            activeName === tabs[2].activeName && stars ?
                                stars.size === 0 ?
                                <Placeholder text={tabs[2].activeName} />
                                : stars && this.renderStars(stars)
                            : null
                        }

                        {
                            activeName === tabs[3].activeName ?
                                user.get('followers') === 0 ?
                                <Placeholder text={tabs[3].activeName} />
                                : <div>1</div>// followers && this.renderStars(stars)
                            : null
                        }

                        {
                            activeName === tabs[4].activeName && followings ?
                                followings.size === 0 ?
                                <Placeholder text={tabs[4].activeName} />
                                : followings && this.renderFollowings(followings)
                            : null
                        }
                    </Content>
            </div>
        );
    }
}

User.propTypes = {
    activeName: React.PropTypes.string.isRequired,
    user: React.PropTypes.instanceOf(Immutable.Map),
    reps: React.PropTypes.instanceOf(Immutable.List),
    stars: React.PropTypes.instanceOf(Immutable.List),
    followings: React.PropTypes.instanceOf(Immutable.List),
};

export default User;