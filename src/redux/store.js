import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk' 
import { projectReducer } from './projects/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    projects: projectReducer
});


const store = createStore(
    rootReducer, 
    {},
    enhancer
);
  
export default store;