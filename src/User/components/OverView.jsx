import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import Loading from 'components/Loading';

const {
    List,
    Item
} = ListBlock;

const OverView = ({
        user,
        reps,
        isFetching
    }) =>
    isFetching ? <Loading /> :
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
            <h2 className='reps-title'>Popular repositories</h2>
            <List className='user-reps'>
                {
                    reps.map((rep, idx) =>
                                idx <= 5 &&
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
                            )
                }
            </List>
        </div>
    </div>;


OverView.propTypes = {
    user: React.PropTypes.instanceOf(Immutable.Map),
    reps: React.PropTypes.instanceOf(Immutable.List),
    isFetching: React.PropTypes.bool,
};

export default OverView;