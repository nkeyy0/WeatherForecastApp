import CitySearchField from '../components/CitySearchField';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectOnChange } from '../actions/index';
import SelectWeatherService from '../components/SelectWeatherService';


const mapStateToProps = (state) => {
    return {
        api: state.api
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: bindActionCreators(selectOnChange, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectWeatherService);