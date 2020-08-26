import React from 'react';


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
                <button onClick = {()=> onClick(cityChanged, data)}>Search</button>
            </form>
        )
    }
}

export default CitySearchField;