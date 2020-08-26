import WeatherInfo from '../components/WeatherInfo';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchCity } from '../actions/index';
import { changeInputSearch } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        city : state.city,
        temperature: state.data.main.temp
    }
};

export default connect(mapStateToProps)(WeatherInfo);