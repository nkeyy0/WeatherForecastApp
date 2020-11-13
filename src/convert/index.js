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
  const newArr = arr.reduce((res, value, i, array) => {}, []);
  return newArr;
};

export const convertTemperatureToChart = (arr) => {
  const result = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );

  const tempDataToChart = result.map((value) => {
    return value.map((temp) => {
      return { x: new Date(temp.timeRequest), y: temp.temperature };
    });
  });
  const cityDataToChart = result.map((value) => {
    return value.map((temp) => {
      return temp.name;
    });
  });
  const res = cityDataToChart.map((city) => {
    return city[0];
  });
  const pressureDataToChart = result.map((value) => {
    return value.map((temp) => {
      return { x: new Date(temp.timeRequest), y: temp.pressure };
    });
  });
  return { temp: tempDataToChart, pressure: pressureDataToChart,  cities: res };
};


//

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
];




console.log(convertTemperatureToChart(arr));
export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}

// export const cityToLabel = (arr) => {
//   const result = Object.values(arr.reduce((acc, city) => {
//     const { name } = city;

//     if (!acc[name]) acc[name] = [];
//     acc[name].push(city);

//     return acc;
//   }, {}));

// const cityDataToChart = result.map((value) => {
//   return value.map(temp => {
//     return temp.name
//   })
// });
// const res = cityDataToChart.map(city => {
//   return city[0];
// })
//   return res;
// }
