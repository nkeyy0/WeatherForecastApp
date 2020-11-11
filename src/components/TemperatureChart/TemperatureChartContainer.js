import { connect } from "react-redux";
import TemperatureChart from "./TemperatureChart";

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  cities: state.citiesWeather.cities,
  email: state.auth.email,
});

export default connect(mapStateToProps)(TemperatureChart);
