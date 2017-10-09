import React from 'react';
import Immutable from 'immutable';
import Header from 'components/Header';
import Content from 'components/Content';
import ListBlock from 'components/ListBlock';
import clearToolbar from 'common/clearToolbar';
import Tab from 'components/Tab';
import CountPage from 'components/CountPage';
import Repositories from './components/Repositories';
import Issues from './components/Issues';
import Users from './components/Users';
import './style.less';

const {
    List,
    Item
} = ListBlock;

const tabs = [{
    activeName: 'repositories',
    title: 'Repositories'
}, {
    activeName: 'issues',
    title: 'Issues'
}, {
    activeName: 'users',
    title: 'Users'
}];

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    componentDidMount() {
        clearToolbar();
    }

    keyUpHandler(e) {
        if (e.keyCode === 13) {

            let activeName = this.props.activeName ? this.props.activeName : tabs[2].activeName;

            this.props.changeActiveName(activeName);
            this.props.getItems(e.target.value, activeName);
        }
    }

    changeTabHandler(activeName) {
        this.props.changeActiveName(activeName);
        this.props.getItems(this.refs.search.value, activeName);
    }

    changePageHandler(page) {
        this.props.getItems(this.refs.search.value, this.props.activeName, page);
    }

    render() {
        const {
            items,
            activeName,
            totalPages,
            resetPage,
            gotoUser,
            isFetching,
        } = this.props;

        console.log(items);

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

                    <Tab
                        tabs={tabs}
                        activeName={tabs[2].activeName}
                        onChange={_activeName => this.changeTabHandler(_activeName)} />

                    {
                        activeName === tabs[0].activeName &&
                        <Repositories
                            items={items}
                            isFetching={isFetching} />
                    }

                    {
                        activeName === tabs[1].activeName &&
                        <Issues
                            items={items}
                            isFetching={isFetching} />
                    }

                    {
                        activeName === tabs[2].activeName &&
                        <Users
                            items={items}
                            gotoUser={gotoUser}
                            isFetching={isFetching} />
                    }

                    {
                        items && items.size > 0 &&
                        <CountPage
                            max={totalPages}
                            reset={resetPage}
                            onChange={_page => this.changePageHandler(_page)} />
                    }
                </Content>
            </div>
        );
    }
}

Search.propTypes = {
    item: React.PropTypes.instanceOf(Immutable.List),
    activeName: React.PropTypes.string,
    totalPages: React.PropTypes.number,
    resetPage: React.PropTypes.bool,
};

export default Search;