import React from 'react';
import { Button } from '@material-ui/core';


class CitySearchField extends React.Component {
    render(){
        const {city, cityChanged, data, onChange, onSubmit, onClick} = this.props
        console.log(cityChanged);
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                onSubmit(cityChanged)}}>
                <input type = "text"
                        name = "city"
                        placeholder = "Enter City"
                        value = {cityChanged}
                        onChange = {(e) =>{
                            onChange (e.target.value)}}
                        />
                <Button onClick = {()=> onClick(cityChanged, data)}>Search</Button>
            </form>
        )
    }
}

export default CitySearchField;