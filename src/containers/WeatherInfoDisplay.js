import WeatherInfo from '../components/WeatherInfo';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        downloadError: state.downloadError
    }
};

export default connect(mapStateToProps)(WeatherInfo);