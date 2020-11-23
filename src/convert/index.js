import { DAY, THREE_HOURS } from "../constants/constants";

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

export const getDateForPicker = (arr) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  const dateArray = sortResult.map((value) =>
    value.map((date) => date.timeRequest)
  );
  const dateForSort = dateArray.reduce((res, value) => {
    return res.concat(value);
  }, []);
  const sortedDate = dateForSort.sort((a, b) => new Date(a) - new Date(b));
  const min = new Date(sortedDate.shift());
  const max = new Date(sortedDate.pop());
  return {
    min: `${min.getFullYear()}-${min.getMonth() + 1}-${min.getDate()}`,
    max: `${max.getFullYear()}-${max.getMonth() + 1}-${max.getDate()}`,
  };
};

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

const filterByDate = (
  arr,
  min = new Date('11 - 10 - 2020'),
  max = new Date('11 - 10 - 2021')
) => {
  console.log('min:', new Date(min), 'max:' ,new Date(max))
  const dateArray = arr.reduce((acc, value) => {
    acc.push(
      value.reduce((res, date) => {
        if (
          new Date(date.timeRequest).getTime() >= new Date(min).getTime()  &&
          new Date(date.timeRequest).getTime() <= new Date(max).getTime() + DAY 
        ) {
          res.push(date);
        }
        return res;
      }, [])
    );
    return acc;
  }, []);
  console.log(dateArray.filter((value) => value.length));
  return dateArray.filter((value) => value.length);
};

const filterByCity = (arr, searchTerms) => {
  const filterArray = [];
  for (let i = 0; i < searchTerms.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (searchTerms[i] === arr[j][0].name) {
        filterArray.push(arr[j]);
      }
    }
  }
  console.log(filterArray);
  return filterArray;
};

export const resultFilter = (arr, searchTerms, min, max, indicator) => {
  const sortResult = Object.values(
    arr.reduce((acc, city) => {
      const { name } = city;

      if (!acc[name]) acc[name] = [];
      acc[name].push(city);

      return acc;
    }, {})
  );
  const filter = [];
  console.log(searchTerms.length);
  if (!searchTerms.length) {
    filter.push(...filterByDate(sortResult, min, max));
  } else {
    const cityFilterArray = filterByCity(sortResult, searchTerms);
    filter.push(...filterByDate(cityFilterArray, min, max));
  }
  console.log("FILTER:", filter);
  const tempData = filter.map((value) => {
    console.log('tempValue:', value)
    return value.map((temp) => {
      console.log('temp', temp);
      return { x: new Date(temp.timeRequest), y: temp.temperature };
    });
  });
  console.log('tempData:', tempData);
  console.log(tempData);
  const cityDataToChart = filter.map((value) => {
    return value.map((temp) => {
      return temp.name;
    });
  });
  const citiesNamesArray = cityDataToChart.map((city) => {
    return city[0];
  });
  const pressureData = filter.map((value) => {
    return value.map((press) => {
      return { x: new Date(press.timeRequest), y: press.pressure };
    });
  });
  const windSpeedData = filter.map((value) => {
    return value.map((wind) => {
      return { x: new Date(wind.timeRequest), y: wind.windSpeed };
    });
  });
  const humidityData = filter.map((value) => {
    return value.map((hum) => {
      return { x: new Date(hum.timeRequest), y: hum.humidity };
    });
  });
  const timeData = filter.map((value) => {
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


