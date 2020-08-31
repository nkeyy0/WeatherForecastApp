import WeatherInfo from '../components/WeatherInfo';
import { connect } from 'react-redux';
import BoxWeather from '../components/BoxWeather';


const mapStateToProps = (state) => {
    console.log(state)
    return { 
        data : state.data,
    }
};

export default connect(mapStateToProps)(BoxWeather);