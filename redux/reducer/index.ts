import { combineReducers } from 'redux';
import newsSettingsReducer from './news-settings-reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({  
    newsSettingsReducer:newsSettingsReducer
});

// Exports
export default rootReducer;