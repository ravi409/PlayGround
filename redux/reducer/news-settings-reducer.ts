const initNewsSettings: {} = {};
const initialState = { newsSettings: initNewsSettings };

const newsSettingsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE_NEWS_SETTINGS": {
            return { ...state, newsSettings: action.newsSettings };
        }
        default: {
            return state;
        }

    }
}
export default newsSettingsReducer;