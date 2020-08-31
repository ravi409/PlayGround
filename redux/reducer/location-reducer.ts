const initLocationData: {} = {};
const initialState = { locationData: initLocationData };

const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE_LOCATION": {
            return { ...state, locationData: action.locationData };
        }
        default: {
            return state;
        }

    }
}
export default locationReducer;