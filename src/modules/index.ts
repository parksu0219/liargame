import { combineReducers } from 'redux';
import playInfo from './PlayInfo';
import setting from './Setting';

const rootReducer = combineReducers({
    playInfo,
    setting
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;