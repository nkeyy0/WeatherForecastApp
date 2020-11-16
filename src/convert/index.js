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

export const convertTemperatureToChart = (arr) => {};

export const setDataToChartHelper = (arr, indicator) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );

  const tempData = sortResult.map((value) => {
    return value.map((temp) => {
      return { x: new Date(temp.timeRequest), y: temp.temperature };
    });
  });
  const cityDataToChart = sortResult.map((value) => {
    return value.map((temp) => {
      return temp.name;
    });
  });
  const citiesNamesArray = cityDataToChart.map((city) => {
    return city[0];
  });
  const pressureData = sortResult.map((value) => {
    return value.map((press) => {
      return { x: new Date(press.timeRequest), y: press.pressure };
    });
  });
  const windSpeedData = sortResult.map((value) => {
    return value.map((wind) => {
      return { x: new Date(wind.timeRequest), y: wind.windSpeed };
    });
  });
  const humidityData = sortResult.map((value) => {
    return value.map((hum) => {
      return { x: new Date(hum.timeRequest), y: hum.humidity };
    });
  });
  // return { temp: tempDataToChart, pressure: pressureDataToChart,  cities: res, windSpeed: windSpeedDataToChart };
  /////////////////////////////////////////////
  const timeData = arr.map((value) => {
    return new Date(value.timeRequest);
  });
  const dataToChart = citiesNamesArray.map((value) => {
    return {
      label: value,
      lineTension: 0,
      fill: false,
    };
  });
  const resultData = [];
  if (indicator === "pressure") {
    const weatherToChart = pressureData.map((value) => {
      return { data: value };
    });

    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "temperature") {
    const weatherToChart = tempData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "wind speed") {
    const weatherToChart = windSpeedData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "humidity") {
    const weatherToChart = humidityData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  return {
    time: timeData,
    data: resultData,
  };
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

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export const generateRandomColorForChart = (arr) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  return sortResult.map((value) => {
    return {
      borderColor: generateRandomColor(),
    };
  });
};

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


export const getCityArray = (arr) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  const cityDataToChart = sortResult.map((value) => {
    return value.map((temp) => {
      return temp.name;
    });
  });
  const citiesNamesArray = cityDataToChart.map((city) => {
    return city[0];
  });
  return citiesNamesArray;
}

const foo = (arr, searchTerms, indicator) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  // console.log(sortResult);
  // const filter = sortResult.map(cities => {
  //   return cities.find(city => city.name === searchTerm)
  // });
  // const filter = sortResult.find(city => city[0].name === searchTerm);
  console.log('LENGTH', sortResult.length)
  const filterArray = [];
  for(let i = 0; i< searchTerms.length; i++){
    for(let j = 0; j < sortResult.length; j++){
      if(searchTerms[i] === sortResult[j][0].name){
        filterArray.push(sortResult[i]);
      }
    }
    
  }
  console.log(filterArray);
  const tempData = filterArray.map((value) => {
    return value.map((temp) => {
      return { x: new Date(temp.timeRequest), y: temp.temperature };
    });
  });
  const cityDataToChart = filterArray.map((value) => {
    return value.map((temp) => {
      return temp.name;
    });
  });
  const citiesNamesArray = cityDataToChart.map((city) => {
    return city[0];
  });
  const pressureData = filterArray.map((value) => {
    return value.map((press) => {
      return { x: new Date(press.timeRequest), y: press.pressure };
    });
  });
  const windSpeedData = filterArray.map((value) => {
    return value.map((wind) => {
      return { x: new Date(wind.timeRequest), y: wind.windSpeed };
    });
  });
  const humidityData = filterArray.map((value) => {
    return value.map((hum) => {
      return { x: new Date(hum.timeRequest), y: hum.humidity };
    });
  });
  const timeData = arr.map((value) => {
    return new Date(value.timeRequest);
  });
  const dataToChart = citiesNamesArray.map((value) => {
    return {
      label: value,
      lineTension: 0,
      fill: false,
    };
  });
  const resultData = [];
  if (indicator === "pressure") {
    const weatherToChart = pressureData.map((value) => {
      return { data: value };
    });

    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "temperature") {
    const weatherToChart = tempData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "wind speed") {
    const weatherToChart = windSpeedData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  if (indicator === "humidity") {
    const weatherToChart = humidityData.map((value) => {
      return { data: value };
    });
    for (let i = 0; i < dataToChart.length; i++) {
      resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
    }
  }
  return {
    time: timeData,
    data: resultData,
  };
}

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
    name: "Braslaw",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T07:39:33.831Z",
  },
  {
    name: "Braslaw",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T07:39:33.831Z",
  },
  {
    name: "Polotsk",
    temperature: 2,
    pressure: 1033,
    windSpeed: 1,
    humidity: 74,
    api: "OpenWeatherMap",
    timeRequest: "2020-11-11T07:39:33.831Z",
  },

];

console.log('Filer:', foo(arr, ['Vitebsk', 'Minsk', 'Braslaw']), 'temperature');




console.log({arr: []});