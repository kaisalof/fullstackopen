import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowOneCountry = ({ oneCountry }) => {
    return (
        <div>
            <h1>{oneCountry.name}</h1>
            <p>capital {oneCountry.capital}</p>
            <p>population {oneCountry.population}</p>
            <h2>languages</h2>
            <ul>
                {oneCountry.languages.map(language =>
                    <li key={language.name}>
                        {language.name}
                    </li>
                )}
            </ul>
            <img alt="flag" src={oneCountry.flag} style={{ width: "50%" }}></img>
        </div>
    )
}

const Filter = ({ filterCountries, setOne }) => {
    if (filterCountries.length === 250) {
        return null
    } else if (filterCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (filterCountries.length === 1) {
        const c = filterCountries[0]
        return (
            <ShowOneCountry oneCountry={c} />
        )
    } else {
        return (
            <div>
                {filterCountries.map(country =>
                    <div>
                        <p key={country.name}>
                            {country.name}
                            <button onClick={() => setOne(country)}>show</button>
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])

    const setOne = (c) => {
        setFilteredCountries([c])
    }

    const handleInputChange = (event) => {
        setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()) === true))
    }

    return (
        <div>
            <form>
                find countries <input
                    type='text'
                    onChange={handleInputChange}
                />
            </form>
            <Filter filterCountries={filteredCountries} setOne={setOne} />
        </div>
    )
}

export default Countries