import React from 'react';
import CitiesList from './CitiesList';


const cities = ['Vitebsk', 'Minsk', 'New York'];


class App extends React.Component {
    render(){
        return (
            <div>
            <h1>Weather</h1>
            <CitiesList cities = {cities}/>
            </div>
        );
    }
}

export default App;

