import React from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
import ListBlock from 'components/ListBlock';
import clearToolbar from 'common/clearToolbar';
import Tab from 'components/Tab';
import './style.less';

const {
    List,
    Item
} = ListBlock;

const tabs = [
    {
        activeName:'repositories',
        name:'Repositories'
    },
    {
        activeName:'issues',
        name:'Issues'
    },
    {
        activeName:'users',
        name:'Users'
    }
];

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    componentDidMount() {
        clearToolbar();
    }

    renderRepositoriesItems(items) {
        return items.map(rep => (
            <Item
                key={rep.get('id')}>
                <div className='item-wrap'>
                    <div className='title'>{rep.get('full_name')}</div>
                    <div className='after'>
                        {rep.get('stargazers_count')}<span>★</span>
                    </div>
                </div>

                <div className='des'>{rep.get('description')}</div>
            </Item>
        ));
    }

    renderIssuesItems(items) {
        return items.map(issue => (
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
                            issue.get('body').length > 200 ?
                            issue.get('body').substring(0, 200) + '...'
                            : issue.get('body')
                        }
                    </div>
                }
            </Item>
        ));
    }

    renderUserItems(items) {
        return items.map(user => (
            <Item key={user.get('id')} media>
                <div className='item-media'>
                    <img src={user.get('avatar_url')} />
                </div>
                <div className='item-inner'>
                    <div className='item-title'>{user.get('login')}</div>
                </div>
            </Item>
        ));
    }

    keyUpHandler(e) {
        if (e.keyCode === 13) {
            this.props.getItems(e.target.value, this.props.activeName);
        }
    }

    changeTabHandler(activeName) {
        this.props.getItems(this.refs.search.value, activeName, 1);
        this.props.getActiveName(activeName);
    }

    render() {
        let {
            items,
            activeName
        } = this.props;

        return (
            <div className='search'>
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
                    <List>
                        <Item className='search-input'>
                            <div className='item-inner'>
                                <div className='item-input'>
                                    <input
                                        type='text'
                                        ref='search'
                                        onKeyUp={this.keyUpHandler} />
                                </div>
                            </div>
                        </Item>
                    </List>

                    <List>
                        <item>
                            <Tab
                                tabs={tabs}
                                activeName={tabs[2].activeName}
                                onChange={_activeName => this.changeTabHandler(_activeName)} />
                        </item>
                    </List>

                    {
                        activeName === 'repositories' && items &&
                        <List className='rep-items'>
                            {
                                items.size > 0 && this.renderRepositoriesItems(items)
                            }
                        </List>
                    }

                    {
                        activeName === 'issues' && items &&
                        <List className='issues-items'>
                            {
                                items.size > 0 && this.renderIssuesItems(items)
                            }
                        </List>
                    }

                    {
                        activeName === 'users' && items &&
                        <List className='users-items'>
                            {
                                items.size > 0 && this.renderUserItems(items)
                            }
                        </List>
                    }
                </Content>
            </div>
        );
    }
}

Search.propTypes = {};

export default Search;