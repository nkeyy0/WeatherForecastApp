export const convertToCelsius = (temperature) =>
  Math.round(temperature - 273.15);
export const convertToKilometers = (m) => (m / 1000).toFixed(1);
export const convertWindSpeed = (speed) => Math.floor((speed * 100) / 100);
export const firstLetterToUpperCase = (str) =>
  str[0].toUpperCase() + str.slice(1);
export const getSunrise = (sunrise) => {
  const date = new Date(sunrise * 1000);
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
};
export const getSunset = (sunset) => {
  const date = new Date(sunset * 1000);
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
};

export const ErrorsCheck = (errors) => {
  const errorsArray = Object.values(errors);
  for (let i = 0; i < errorsArray.length; i++) {
    if (errorsArray[i]) {
      return true;
    }
  }
};

export const ErrorDescription = (errorsDescriptionArray) => {
  const descriptionError = Object.values(errorsDescriptionArray);
  console.log(descriptionError);
  for (let i = 0; i < descriptionError.length; i++) {
    if (descriptionError[i]) {
      return descriptionError[i];
    }
  }
};

export const GetAvatarLetters = (str) => {
  const strArray = str.split(" ");
  const nameFirstLetter = strArray[0].slice(0, 1).toUpperCase();
  const surnameFirstLetter = strArray[1].slice(0, 1).toUpperCase();
  return `${nameFirstLetter}${surnameFirstLetter}`;
};

export const getFirstLetter = (str) => str.slice(0, 1).toUpperCase();

const getArr = (arr) => {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  const newArr =  arr.reduce((res, value, i, array) => {
  }, []);
  return newArr;
};

const arr = [
  {
    name: "Vitebsk",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T07:39:33.831Z",
  },
  {
    name: "Vitebsk",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T08:07:24.506Z",
  },
  {
    name: "Vitebsk",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T08:07:26.209Z",
  },
  {
    name: "Minsk",
    temperature: 4,
    pressure: 1033,
    windSpeed: 1,
    humidity: 93,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T08:43:17.927Z",
  },
  {
    name: "Minsk",
    temperature: 5,
    pressure: 1033,
    windSpeed: 2,
    humidity: 80,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T09:11:34.652Z",
  },
  {
    name: "Minsk",
    temperature: 5,
    pressure: 1033,
    windSpeed: 2,
    humidity: 80,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T09:11:36.956Z",
  },
  {
    name: "Minsk",
    temperature: 5,
    pressure: 1033,
    windSpeed: 1,
    humidity: 80,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T09:30:53.622Z",
  },
  {
    name: "New York",
    temperature: 18.87,
    pressure: 1013,
    windSpeed: 2.1,
    humidity: 93,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T08:59:37.135Z",
  },
  {
    name: "Moscow",
    temperature: 0.49,
    pressure: 1030,
    windSpeed: 3,
    humidity: 82,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T08:59:44.173Z",
  },
  {
    name: "Urbany",
    temperature: 5.38,
    pressure: 1026,
    windSpeed: 1,
    humidity: 86,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T08:59:52.545Z",
  },
  {
    name: "Antarctica",
    temperature: -28.13,
    pressure: 1002,
    windSpeed: 8.89,
    humidity: 82,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T09:00:59.103Z",
  },
  {
    name: "Kirov",
    temperature: -0.56,
    pressure: 1016,
    windSpeed: 6.29,
    humidity: 94,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T09:03:26.040Z",
  },
  {
    name: "Vitebsk",
    temperature: 3,
    pressure: 1031,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T10:05:18.929Z",
  },
  {
    name: "Vitebsk",
    temperature: 3,
    pressure: 1031,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-12T10:08:44.591Z",
  },
];

const changeArray = (arr) => {
  arr.sort();
  console.log(arr);
  let count = 0;
  const changedArray =  arr.reduce((result, value, i, array) => {
    
    console.log(array[i], i)
    if(array[i+1] !== undefined && array[i] === array[i+1]){
      result.push(value);
      count++;
      if(array[i+1] ==! array[i+2]){
        result.push(arr[i+1]);
      }
    }
    // else {
    //   result.push([value]);
    // }
    
    return result;
  }, []);
  console.log(count);
  return changedArray;
}



const arr = ['aaa', 'bv', 'aaa', 'aaa', 'eee', 'ccc', 'aaa', 'ww', 'bv', 'bv', 'asf', 'a', 'q', 'q'];


console.log(changeArray(arr));

