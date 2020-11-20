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
};

export const filterByCity = (arr, searchTerms, indicator) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  const filterArray = [];
  for (let i = 0; i < searchTerms.length; i++) {
    for (let j = 0; j < sortResult.length; j++) {
      console.log(searchTerms[i], sortResult[j][0].name);
      if (searchTerms[i] === sortResult[j][0].name) {
        console.log(searchTerms[i], sortResult[j][0].name, "equals");
        filterArray.push(sortResult[j]);
      }
    }
  }
  const tempData = filterArray.map((value) => {
    return value.map((temp) => {
      return { x: new Date(temp.timeRequest), y: temp.temperature };
    });
  });
  console.log(tempData);
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
  const timeData = filterArray.map((value) => {
    return value.map((date) => {
      return new Date(date.timeRequest);
    });
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
    time: [...timeData],
    data: resultData,
  };
};



// getDateForPicker = (arr) => {
//   const sortResult = Object.values(
//     arr.reduce((acc, city) => {
//       const { name } = city;

//       if (!acc[name]) acc[name] = [];
//       acc[name].push(city);

//       return acc;
//     }, {})
//   );
//   const dateArray = sortResult.map(value => value.map(date => date.timeRequest));
//   const dateForSort = dateArray.reduce((res, value) => {
//     return res.concat(value)
//   }, []);
//   const sortedDate = dateForSort.sort((a, b) => new Date(a) - new Date(b));
//   return{
//     min: sortedDate.shift(),
//     max: sortedDate.pop()
//   }
// }

// const arr = [
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T07:39:33.831Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:07:24.506Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:07:26.209Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:07:27.601Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:07:28.994Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:08:09.552Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:08:10.948Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:08:12.321Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:08:13.613Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 2,
//     pressure: 1033,
//     windSpeed: 3,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:25:35.714Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 4,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T08:43:17.927Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 4,
//     pressure: 1033,
//     windSpeed: 0,
//     humidity: 93,
//     api: "Weatherstack",
//     timeRequest: "2020-11-11T08:43:30.219Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 4,
//     pressure: 1033,
//     windSpeed: 0,
//     humidity: 93,
//     api: "Weatherstack",
//     timeRequest: "2020-11-11T08:53:23.640Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 7,
//     humidity: 81,
//     api: "Weatherstack",
//     timeRequest: "2020-11-11T09:06:26.628Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 2,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:06:29.790Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 2,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:11:28.213Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 2,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:11:29.882Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 2,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:11:34.652Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 2,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:11:36.956Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 5,
//     pressure: 1033,
//     windSpeed: 1,
//     humidity: 80,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-11T09:30:53.622Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 2,
//     pressure: 1031,
//     windSpeed: 4,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:51:54.365Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 1,
//     pressure: 1031,
//     windSpeed: 1,
//     humidity: 83,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:52:01.670Z",
//   },
//   {
//     name: "New York",
//     temperature: 18.88,
//     pressure: 1013,
//     windSpeed: 2.1,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:52:52.488Z",
//   },
//   {
//     name: "New York",
//     temperature: 18.87,
//     pressure: 1013,
//     windSpeed: 2.1,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:59:37.135Z",
//   },
//   {
//     name: "Moscow",
//     temperature: 0.49,
//     pressure: 1030,
//     windSpeed: 3,
//     humidity: 82,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:59:44.173Z",
//   },
//   {
//     name: "Urbany",
//     temperature: 5.38,
//     pressure: 1026,
//     windSpeed: 1,
//     humidity: 86,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T08:59:52.545Z",
//   },
//   {
//     name: "antarctica",
//     temperature: -28.13,
//     pressure: 1002,
//     windSpeed: 8.89,
//     humidity: 82,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T09:00:36.882Z",
//   },
//   {
//     name: "Antarctica",
//     temperature: -28.13,
//     pressure: 1002,
//     windSpeed: 8.89,
//     humidity: 82,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T09:00:59.103Z",
//   },
//   {
//     name: "Kirov",
//     temperature: -0.56,
//     pressure: 1016,
//     windSpeed: 6.29,
//     humidity: 94,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T09:03:26.040Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 3,
//     pressure: 1031,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T10:05:18.929Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 3,
//     pressure: 1031,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T10:08:44.591Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 3,
//     pressure: 1031,
//     windSpeed: 1,
//     humidity: 74,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-12T10:09:35.115Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 0,
//     pressure: 1030,
//     windSpeed: 3,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T07:28:28.630Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 1,
//     pressure: 1028,
//     windSpeed: 3,
//     humidity: 87,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T07:28:39.903Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 0,
//     pressure: 1030,
//     windSpeed: 3,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T07:28:50.683Z",
//   },
//   {
//     name: "Minsk",
//     temperature: 1,
//     pressure: 1028,
//     windSpeed: 3,
//     humidity: 85,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T08:10:58.559Z",
//   },
//   {
//     name: "Moscow",
//     temperature: 3.92,
//     pressure: 1031,
//     windSpeed: 2,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T09:37:44.246Z",
//   },
//   {
//     name: "Urbany",
//     temperature: 7.94,
//     pressure: 1024,
//     windSpeed: 0.5,
//     humidity: 81,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T09:38:01.816Z",
//   },
//   {
//     name: "New York",
//     temperature: 8.54,
//     pressure: 1018,
//     windSpeed: 3.1,
//     humidity: 93,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-13T09:38:27.652Z",
//   },
//   {
//     name: "New York",
//     temperature: 10.1,
//     pressure: 1011,
//     windSpeed: 3.1,
//     humidity: 40,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-16T08:49:18.743Z",
//   },
//   {
//     name: "Braslaw",
//     temperature: 2.88,
//     pressure: 1023,
//     windSpeed: 5.87,
//     humidity: 84,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-16T09:21:37.028Z",
//   },
//   {
//     name: "Vitebsk",
//     temperature: 1,
//     pressure: 1026,
//     windSpeed: 5,
//     humidity: 89,
//     api: "OpenWeatherMap",
//     timeRequest: "2020-11-16T09:21:42.973Z",
//   },
// ];

// console.log(getDateForPicker(arr));

