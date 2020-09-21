import { connect } from 'react-redux';
import CitySearchField from './CitySearchField';

const mapStateToProps = (state) => ({
    api: state.api,
    cityName: state.cityName
  });
  
  export default connect(mapStateToProps)(CitySearchField);