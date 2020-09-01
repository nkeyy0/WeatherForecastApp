import { colors } from "@material-ui/core";

export const searchCity = (city) => {
    console.log('Search...');
    return{
    type: 'SEARCH_CITY',
    payload: city
    }
}

export const displayTemperature = (temperature) => {
    return{
    type: 'DISPLAY_TEMPERATURE',
    payload : temperature
    }
}

export const changeInputSearch = cityChanged => {
    return{
        type: 'CHANGE_INPUT_SEARCH',
        payload: cityChanged
    }
}

export const selectOnChange = APIChanged => {
    return{
        type: 'SELECT_ON_CHANGE',
        payload: APIChanged
    }
}

export const setDataFromOpenWeatherMap = (dataFromAPI) => {
    console.log(dataFromAPI);
    return {
        type : 'SET_DATA_FROM_OPEN_WEATHER_MAP',
        payload: dataFromAPI
    }
}

export const setDataFromWeatherStack = (dataFromAPI) => {
    console.log(dataFromAPI);
    return{
        type: 'SET_DATA_FROM_WEATHER_STACK',
        payload: dataFromAPI
    }
}


const API_KEY = '468b49f7d4966997c9d210546288fd30';
export const loadDataFromOpenWeatherMap = (city) =>  dispatch => {
        dispatch(startDownload);
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY_FROM_OPEN_WEATHER}`)
                .then(response => response.json())
                    .then(json => (json.cod === 200) ? dispatch(setDataFromOpenWeatherMap(json)) : dispatch(errorDownload(json.cod)))
                        .then(() => dispatch(endDownload))
        
        
    }

const API_KEY_2 = '7952bc4723eb17ee3bba41789e20faf0';
export const loadDataFromWeatherStack = (city) =>  dispatch => {
    dispatch(startDownload);
        fetch(`http://api.weatherstack.com/current?access_key=${API_KEY_2}&query=${city}`)
            .then(response => response.json())
                .then(json => dispatch(setDataFromWeatherStack(json)))
                    .then(() => dispatch(endDownload))
    
    
}


export const startDownload = {
    type: 'START_DOWNLOAD',
    payload: true
}


export const errorDownload = error => ({
    type: 'ERROR_DOWNLOAD',
    payload: error,
})

export const endDownload = {
    type : 'END_DOWNLOAD',
    payload: false
}

export const selectAPI = api => 
{
    return{
    type: 'SELECT_API', 
    payload: api
    }
}
