import { connect } from 'react-redux';
import CitySearchField from './CitySearchField';

const mapStateToProps = (state) => ({
    api: state.weatherInfo.api,
    cityName: state.weatherInfo.cityName,
    email: state.auth.email
  });
  
  export default connect(mapStateToProps)(CitySearchField);