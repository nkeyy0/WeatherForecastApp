import React from 'react';
import WeatherInfo from './WeatherInfo'

class CitiesList extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            enterCity: null
        };
    }
    render(){
        return (
            <div>
            <h2>Enter City:</h2>
                {this.props.cities.map ((item, index) => 
                    <button
                    key = {index}
                    onClick = {() => this.setState({enterCity : index})}>
                        {item}
                    </button>)
            }
            {(this.state.enterCity != null) && <WeatherInfo enterCity = {this.props.cities[this.state.enterCity]}/>}
            
            </div>
            
        );
    }
}

export default CitiesList;