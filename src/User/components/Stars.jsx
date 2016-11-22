import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import UserPlaceholder from 'components/Placeholder/UserPlaceholder';
import LanguageColor from 'components/LanguageColor';
import Loading from 'components/Loading';

const {
    List,
    Item
} = ListBlock;

const Stars = ({
        stars,
        placeholder,
        isFetching,
    }) =>
    isFetching ? <Loading /> :
    stars.size !== 0 ?
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
                            <LanguageColor language={star.get('language')} />
                        </div>
                    </div>
                </Item>
            ))
        }
    </List> : <UserPlaceholder text={placeholder} />;

Stars.propTypes = {
    stars: React.PropTypes.instanceOf(Immutable.List),
    placeholder: React.PropTypes.string,
    isFetching: React.PropTypes.bool,
};

export default Stars;