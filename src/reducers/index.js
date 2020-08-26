const initialState = {
    city: '',
    cityChanged: '',
    temperature: '',
    pressure: '',
    data : {
        main: {
            temperature : undefined
        }
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_SEARCH':
            return {...state, cityChanged: action.payload};
        case 'SEARCH_CITY':
            return {...state, city: action.payload};
        case 'GET_DATA': 
            return {...state, data: action.payload};
        default:
             return state;
    }
}

export default rootReducer;