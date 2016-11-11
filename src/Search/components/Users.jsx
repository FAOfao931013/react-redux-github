import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import SearchPlaceholder from 'components/Placeholder/SearchPlaceholder';

const {
    List,
    Item
} = ListBlock;

class Users extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            items,
            gotoUser,
        } = this.props;
        return (
            items.size !== 0 ?
            <List className='users-items'>
                {
                    items.map(user => (
                        <Item key={user.get('id')} media>
                            <div className='item-media'>
                                <img src={user.get('avatar_url')} />
                            </div>
                            <div className='item-inner'>
                                <div
                                    className='item-title'
                                    onClick={() => gotoUser(user.get('login'))}>{user.get('login')}
                                </div>
                            </div>
                        </Item>
                    ))
                }
            </List> : <SearchPlaceholder />
        );
    }
}

Users.propTypes = {
    item: React.PropTypes.instanceOf(Immutable.List),
};

export default Users;