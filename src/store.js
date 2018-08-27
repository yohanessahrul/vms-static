import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bukuTamu from './reducers/reducer.bukutamu';
import urlReducer from './reducers/reducer.url';
import signUp from './reducers/reducer.signUp';
import signIn from './reducers/reducer.signIn';

const rootReducer = combineReducers({
    bukuTamu,
    urlReducer,
    signUp,
    signIn,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store;