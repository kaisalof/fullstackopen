import React from 'react'

const Content = ({ parts }) => {
    return (
        <div>
            <table>
                <tbody>
                    {parts.map(part =>
                        <tr key={part.id}>
                            <td>
                                {part.name}
                            </td>
                            <td>
                                {part.exercises}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

const Header = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <Content parts={course.parts} />
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
        </div>
    )
}
export default Course
