import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';

const mapStateToProps = (state) => ({
    loading: state.loading,
    downloadError: state.downloadError
});

export default connect(mapStateToProps)(WeatherInfo);

