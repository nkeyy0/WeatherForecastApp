import React from 'react';
import Box from '@material-ui/core/Box';
import { Button, MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';


class SelectWeatherService extends React.Component {
    render() {
        const {api , onChange} = this.props;
        console.log(api);
        return(
            <Box>
                <Select value ={api} onChange = {(e) => onChange (e.target.value)}>
                <MenuItem value ='OpenWeatherMap'>OpenWeatherMap</MenuItem>
                <MenuItem value = "Weatherstack">Weatherstack</MenuItem>
                </Select>
            </Box>
        );
    }
}

export default SelectWeatherService;