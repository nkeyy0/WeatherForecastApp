import { connect } from 'react-redux';
import CitySearchField from './CitySearchField';

const mapStateToProps = (state) => ({
    api: state.api,
    cityName: state.cityName,
    email: state.email
  });
  
  export default connect(mapStateToProps)(CitySearchField);