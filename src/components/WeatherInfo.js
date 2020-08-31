import React from 'react';
import BoxWeather from './BoxWeather';
import { CircularProgress, Typography } from '@material-ui/core';
import BoxInfoDisplay from '../containers/BoxInfoDisplay';


class WeatherInfo extends React.Component {
    render(){
        const {data, loading, downloadError} = this.props;
        console.log(loading);
        console.log(downloadError);
        console.log(data);
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