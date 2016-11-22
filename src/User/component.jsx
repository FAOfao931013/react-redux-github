import React from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
import clearToolbar from 'common/clearToolbar';
import Tab from 'components/Tab';
import OverView from './components/OverView';
import Repositories from './components/Repositories';
import Stars from './components/Stars';
import Followers from './components/Followers';
import Followings from './components/Followings';
import './style.less';

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
                break;
            case tabs[3].activeName:
                this.props.getUserFollowers(this.props.params.name);
                break;
            case tabs[4].activeName:
                this.props.getUserFollowings(this.props.params.name);
                break;
            default:
                return;
        };
    }

    render() {
        const {
            activeName,
            user,
            reps,
            stars,
            followers,
            followings,
            isFetching
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
                            activeName === tabs[0].activeName &&
                            <OverView
                                user={user}
                                reps={reps}
                                isFetching={isFetching} />
                        }

                        {
                            activeName === tabs[1].activeName &&
                            <Repositories
                                reps={reps}
                                placeholder={activeName}
                                isFetching={isFetching} />
                        }

                        {
                            activeName === tabs[2].activeName &&
                            <Stars
                                stars={stars}
                                placeholder={activeName}
                                isFetching={isFetching} />
                        }

                        {
                            activeName === tabs[3].activeName &&
                            <Followers
                                followers={followers}
                                placeholder={activeName}
                                isFetching={isFetching} />
                        }

                        {
                            activeName === tabs[4].activeName &&
                            <Followings
                                followings={followings}
                                placeholder={activeName}
                                isFetching={isFetching} />
                        }
                    </Content>
            </div>
        );
    }
}

User.propTypes = {
    activeName: React.PropTypes.string.isRequired,
};

export default User;