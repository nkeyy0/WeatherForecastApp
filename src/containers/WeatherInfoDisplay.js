import WeatherInfo from '../components/WeatherInfo';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        city : state.city,
        data : state.data
    }
};

export default connect(mapStateToProps)(WeatherInfo);