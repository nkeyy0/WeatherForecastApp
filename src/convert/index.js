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

const errorDescription = {
  name: null,
  surname: null,
  patronymic: null,
  email: "afs",
  city: null,
  password: "asfafs",
  passwordConfirm: null,
};

console.log(ErrorDescription(errorDescription));
