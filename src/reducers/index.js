const initialState = {
    city: '',
    cityChanged: '',
    temperature: '',
    pressure: '',
    descriptionWeather: '',
    data : {
        main: {
            temperature : null,
            humidity: null,
            pressure: null
        },
        weather: [{description: null}],
        wind : {
            speed: null
        },
        visibility: null,
        name: null,
        sys: {
            country: null,
            sunrise: null,
            sunset: null
        }
    },
    dataCompare : {},
    loading: false,
    downloadError: null
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_SEARCH':
            return {...state, cityChanged: action.payload};
        case 'SEARCH_CITY':
            return {...state, city: action.payload};
        case 'GET_DATA': 
            return {...state, data: action.payload, downloadError: null};
        case 'START_DOWNLOAD':
            return{...state, loading: action.payload};
        case 'END_DOWNLOAD':
            console.log(state);
            return{...state, loading: action.payload};
        case 'ERROR_DOWNLOAD':
            return {...state, downloadError : action.payload, loading: false };
        default:
             return state;
    }
}

export default rootReducer;