export default (sunset) => {
  const date = new Date(sunset * 1000);
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
};
