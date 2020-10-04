import { combineReducers } from 'redux';
import playInfo from './PlayInfo';

const rootReducer = combineReducers({
    playInfo
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;