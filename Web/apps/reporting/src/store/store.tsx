import { applyMiddleware, combineReducers, createStore, Store } from 'redux';

import thunk from 'redux-thunk';
import { IBasicState, basicReducer } from '../reducers/basicReducer';

export interface IAppState {
  basicState: IBasicState
}

const rootReducer = combineReducers<IAppState>({
  basicState: basicReducer
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}