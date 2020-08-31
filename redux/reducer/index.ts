import { combineReducers } from 'redux';
import newsSettingsReducer from './news-settings-reducer';
import locationReducer from './location-reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({  
    newsSettingsReducer:newsSettingsReducer,
    locationReducer:locationReducer
});

// Exports
export default rootReducer;