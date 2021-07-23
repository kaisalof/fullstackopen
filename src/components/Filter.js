import React from 'react'

const Filter = ({ setShowAll, handleFilterChange }) => {
    return (
        <form onChange={() => setShowAll(false)}>
            filter shown with <input
                type='text'
                onChange={handleFilterChange}
            />
        </form>
    )
}

export default Filter