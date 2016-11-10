import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import Placeholder from 'components/Placeholder';

const {
    List,
    Item
} = ListBlock;

class Followers extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            followers,
            placeholder
        } = this.props;

        return (
            followers.size !== 0 ?
            <List className='followers'>
                {
                    followers.map(fol => (
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
            </List> : <Placeholder text={placeholder} />
        );
    }
}

Followers.propTypes = {
    followers: React.PropTypes.instanceOf(Immutable.List),
    placeholder: React.PropTypes.string,
};

export default Followers;