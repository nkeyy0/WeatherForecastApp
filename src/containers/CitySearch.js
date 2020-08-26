import CitySearchField from '../components/CitySearchField';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchCity } from '../actions/index';
import { changeInputSearch } from '../actions/index';
import { loadData } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        city : state.city,
        cityChanged: state.cityChanged,
        data: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: bindActionCreators(changeInputSearch, dispatch),
        onSubmit: bindActionCreators(searchCity, dispatch),
        onClick: bindActionCreators(loadData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearchField);