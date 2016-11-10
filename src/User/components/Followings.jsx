import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import Placeholder from 'components/Placeholder';

const {
    List,
    Item
} = ListBlock;

class Followings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            followings,
            placeholder
        } = this.props;

        return (
            followings.size !== 0 ?
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
            </List> : <Placeholder text={placeholder} />
        );
    }
}

Followings.propTypes = {
    followings: React.PropTypes.instanceOf(Immutable.List),
    placeholder: React.PropTypes.string,
};

export default Followings;