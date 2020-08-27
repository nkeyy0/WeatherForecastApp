import React from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


class CitySearchField extends React.Component {
    render(){
        const {cityChanged, data, onChange, onSubmit, onClick} = this.props
        console.log(cityChanged);
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                onSubmit(cityChanged)}}>
                <TextField  type="search" 
                            id="filled-search" 
                            label="Search city" 
                            variant="filled"
                            value = {cityChanged}
                            onChange = {(e) =>{
                            onChange (e.target.value)}}
                        />
                <Button
                size = "large"
                startIcon = {<SearchIcon></SearchIcon>} 
                onClick = {()=> onClick(cityChanged, data)}>Search</Button>
            </form>
        )
    }
}

export default CitySearchField;