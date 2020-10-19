import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';

const mapStateToProps = (state) => ({
    loading: state.weatherInfo.loading,
    downloadError: state.download.downloadError
});

export default connect(mapStateToProps)(WeatherInfo);

