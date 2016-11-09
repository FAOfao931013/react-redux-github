import React from 'react';
import Immutable from 'immutable';
import ListBlock from 'components/ListBlock';
import Placeholder from 'components/Placeholder';
import LanguageColor from 'components/LanguageColor';

const {
    List,
    Item
} = ListBlock;

class Repositories extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {
            reps,
            placeholder
        } = this.props;
        return (
            reps.size !== 0 ?
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
                                <LanguageColor language={rep.get('language')} />
                            </div>
                        </div>
                    </Item>
                ))
            }
            </List> : <Placeholder text={placeholder} />
        );
    }
}

Repositories.propTypes = {
    reps: React.PropTypes.instanceOf(Immutable.List),
    placeholder: React.PropTypes.string,
};

export default Repositories;