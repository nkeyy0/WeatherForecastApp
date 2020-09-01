import CitySearchField from '../components/CitySearchField';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchCity, loadDataFromOpenWeatherMap, loadDataFromWeatherStack } from '../actions/index';
import { changeInputSearch } from '../actions/index';



const mapStateToProps = (state) => {
    return {
        city : state.city,
        cityChanged: state.cityChanged,
        downloadError: state.downloadError,
        api:state.api
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: bindActionCreators(changeInputSearch, dispatch),
        onSubmit: bindActionCreators(searchCity, dispatch),
        loadDataFromOpenWeatherMap: bindActionCreators(loadDataFromOpenWeatherMap, dispatch),
        loadDataFromWeatherStack: bindActionCreators(loadDataFromWeatherStack, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearchField);