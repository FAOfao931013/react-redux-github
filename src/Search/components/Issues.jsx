import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import cutWords from 'common/cutWords';

const {
    List,
    Item
} = ListBlock;

class Issues extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            items
        } = this.props;

        return (
            <List className='issues-items'>
                {
                    items.map(issue => (
                        <Item
                            key={issue.get('id')}>
                            <div className='item-wrap'>
                                <div className='title'>{issue.get('title')}</div>
                                <div className='after'>
                                    <span>#</span>
                                    {issue.get('number')}
                                </div>
                            </div>
                            {
                                issue.get('body') && issue.get('body') !== '' &&
                                <div className='des'>
                                    {
                                        cutWords(issue.get('body'), 200)
                                    }
                                </div>
                            }
                        </Item>
                    ))
                }
            </List>
        );
    }
}

Issues.propTypes = {
    item: React.PropTypes.instanceOf(Immutable.List),
};

export default Issues;