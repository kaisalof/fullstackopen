import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filterCountries }) => {
    console.log(filterCountries.length)

    if (filterCountries.length === 250) {
        return null
    } else if (filterCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (filterCountries.length === 1) {
        const c = filterCountries[0]
        console.log(c)
        return (
            <div>
                <h1>{c.name}</h1>
                <p>capital {c.capital}</p>
                <p>population {c.population}</p>
                <h2>languages</h2>
                <ul>
                    {c.languages.map(language =>
                        <li key={language.name}>
                            {language.name}
                        </li>
                    )}
                </ul>
                <img src={c.flag} style={{width: "50%"}}></img>
            </div>
        )
    } else {
        return (
            <table>
                <tbody>
                    {filterCountries.map(country =>
                        <tr key={country.name}>
                            <td>{country.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [find, setFind] = useState('')
    const [findCountries, setFindCountries] = useState(true)

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])

    const filterCountries = findCountries
        ? countries
        : countries.filter(country => country.name.toLowerCase().includes(find.toLowerCase()) === true)

    const handleInputChange = (event) => {
        setFind(event.target.value)
    }

    return (
        <div>
            <form onChange={() => setFindCountries(false)}>
                find countries <input
                    type='text'
                    onChange={handleInputChange}
                />
            </form>
            <Filter filterCountries={filterCountries} />
        </div>
    )
}

export default Countries