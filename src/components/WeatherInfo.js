import React from 'react';
import BoxWeather from './BoxWeather';
import { CircularProgress, Typography } from '@material-ui/core';
import BoxInfoDisplay from '../containers/BoxInfoDisplay';


class WeatherInfo extends React.Component {
    render(){
        const {loading, downloadError} = this.props;
        return((downloadError === '404') ? 
        <Typography variant = "h2"> City not found</Typography> 
        :(loading) ?
            <CircularProgress/>
            :
            <BoxInfoDisplay/>
        );
    }
}

export default WeatherInfo;