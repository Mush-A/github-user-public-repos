import { useState } from "react"

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
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={value}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default SearchBar