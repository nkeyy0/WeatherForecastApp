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

export const getData = (dataFromAPI) => {
    console.log(dataFromAPI);
    return {
        type : 'GET_DATA',
        payload: dataFromAPI
    }
}


const API_KEY = '468b49f7d4966997c9d210546288fd30';
export const loadData = (city) =>  async dispatch => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => dispatch(getData(json, city)))
    }
