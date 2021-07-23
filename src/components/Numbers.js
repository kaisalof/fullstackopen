import React from 'react'

const Numbers = ({ numbersToShow }) => {
    return (
        <table>
            <tbody>
                {numbersToShow.map(person =>
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Numbers