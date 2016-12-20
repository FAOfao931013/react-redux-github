import React from 'react';
import ReactDOM from 'react-dom';
import 'common/f7';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';
import configureStore from 'store/configureStore';
import DevTools from 'src/DevTools';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

//查看store数据
store.subscribe(() => {
    //console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <div className='entry-wrap'>
            <Router
                history={history}
                routes={routes} />
            {
                process.env.NODE_ENV === 'production' ? null : <DevTools />
            }
        </div>
    </Provider>,
    document.getElementById('root')
);