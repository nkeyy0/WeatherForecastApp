import { connect } from "react-redux";
import MyProfile from "./MyProfile";


const mapStateToProps = (state) => ({
  isLogin : state.auth.isLogin,
  cities: state.citiesWeather.cities
});

export default connect(mapStateToProps)(MyProfile);
