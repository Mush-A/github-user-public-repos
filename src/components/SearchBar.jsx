import { useState } from "react"

import "../style/SearchBar.css"

const SearchBar = ({fetchRepos}) => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchRepos(value)
    }

    return (
        <div id="search-bar">
            <form onSubmit={handleSubmit}>
                <input id="search-text" type="text" onChange={handleChange} value={value} placeholder="Enter github username" />
                <input id="search-button" type="submit" value="GO"/>
            </form>
        </div>
    )
}

export default SearchBar