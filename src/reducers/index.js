import convertToKilometers from '../convert/convertToKilometers';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';


const initialState = {
    city: '',
    cityChanged: '',
    api: null,
    temperature: null,
    pressure: null,
    descriptionWeather: null,
    humidity: null,
    windSpeed: null,
    visibility: null,
    countryName: null,
    sunrise: null,
    sunset: null,
    weatherImage: null,
    loading: false,
    downloadError: null,
    geoLatitude: null,
    geoLongitude: null,
    time: null
    };

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_SEARCH':
            return {...state, cityChanged: action.payload};
        case 'SELECT_ON_CHANGE':
            return{...state, api: action.payload}
        case 'SEARCH_CITY':
            return {...state, city: action.payload};
        case 'SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESED': 
            return {...state,
                 temperature: action.payload.main.temp,
                 humidity:action.payload.main.humidity,
                 pressure: action.payload.main.pressure,
                 descriptionWeather: action.payload.weather[0].description,
                 windSpeed: action.payload.wind.speed,
                 visibility: convertToKilometers(action.payload.visibility),
                 cityName: action.payload.name,
                 countryName: action.payload.sys.country,
                 sunrise: action.payload.sys.sunrise,
                 sunset: action.payload.sys.sunset,
                 weatherImage: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
                 downloadError: null};
                 
        case 'SET_DATA_FROM_WEATHER_STACK_SUCCESED':
            return{...state,
                    temperature: action.payload.current.temperature,
                    humidity: action.payload.current.humidity,
                    pressure: action.payload.current.pressure,
                    descriptionWeather: action.payload.current.weather_descriptions[0],
                    windSpeed: action.payload.current.wind_speed,
                    visibility: action.payload.current.visibility.toFixed(1),
                    cityName: action.payload.location.name,
                    countryName: action.payload.location.country,
                    weatherImage: action.payload.current.weather_icons[0],
                    sunrise: null,
                    sunset: null,
                    downloadError: null
                }
        case 'START_DOWNLOAD':
            return{...state, loading: action.payload};
        case 'END_DOWNLOAD':
            console.log(state);
            return{...state, loading: action.payload};
        case 'ERROR_DOWNLOAD':
            console.log(state);
            return {...state, downloadError : action.payload, loading: false };
        case 'SELECT_API':
            return{...state, api: action.payload}
        case 'GET_ERROR' : {
            console.log(state);
            return {...state, downloadError: action.payload, loading: false}
        }
        case 'SET_TIME_REQUEST': {
            return {...state, time: action.payload}
        }
        default:
             return state;
    }
}

export default rootReducer;