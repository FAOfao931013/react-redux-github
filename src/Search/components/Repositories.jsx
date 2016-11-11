import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import cutWords from 'common/cutWords';
import SearchPlaceholder from 'components/Placeholder/SearchPlaceholder';

const {
    List,
    Item
} = ListBlock;

const Repositories = ({
        items
    }) =>
    items.size !== 0 ?
    <List className='rep-items'>
        {
            items.map(rep => (
                <Item
                    key={rep.get('id')}>
                    <div className='item-wrap'>
                        <div className='title'>{rep.get('full_name')}</div>
                        <div className='after'>
                            {rep.get('stargazers_count')}<span>★</span>
                        </div>
                    </div>
                    {
                        rep.get('description') && rep.get('description') !== '' &&
                        <div className='des'>
                            {
                                cutWords(rep.get('description'), 200)
                            }
                        </div>
                    }
                </Item>
            ))
        }
    </List> : <SearchPlaceholder />;

Repositories.propTypes = {
    item: React.PropTypes.instanceOf(Immutable.List),
};

export default Repositories;