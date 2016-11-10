import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import Placeholder from 'components/Placeholder';
import LanguageColor from 'components/LanguageColor';

const {
    List,
    Item
} = ListBlock;

class Stars extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            stars,
            placeholder
        } = this.props;

        return (
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
            </List> : <Placeholder text={placeholder} />
        );
    }
}

Stars.propTypes = {
    stars: React.PropTypes.instanceOf(Immutable.List),
    placeholder: React.PropTypes.string,
};

export default Stars;