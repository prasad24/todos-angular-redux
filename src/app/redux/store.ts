import { Store, createStore } from 'redux';
import { IAppState } from '../interfaces/appState';
import { rootReducer } from './reducers';

export const store: Store<IAppState> = createStore(rootReducer);
