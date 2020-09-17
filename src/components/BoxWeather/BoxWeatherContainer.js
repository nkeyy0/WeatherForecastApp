import { useSelector } from "react-redux";


  const descriptionWeather = useSelector((state) => state.descriptionWeather);
  const cityName = useSelector((state) => state.cityName);
  const countryName = useSelector((state) => state.countryName);
  const temperature = useSelector((state) => state.temperature);
  const humidity = useSelector((state) => state.humidity);
  const windSpeed = useSelector((state) => state.windSpeed);
  const visibility = useSelector((state) => state.visibility);
  const pressure = useSelector((state) => state.pressure);
  const sunrise = useSelector((state) => state.sunrise);
  const sunset = useSelector((state) => state.sunset);
  const weatherImage = useSelector((state) => state.weatherImage);

  





