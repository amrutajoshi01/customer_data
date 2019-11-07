import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas/rootSaga';

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer(history),
    compose(applyMiddleware(routerMiddleware(history),sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
