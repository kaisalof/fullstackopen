import React from 'react'

const Total = ({ parts }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const a = parts.map(part => part.exercises)
    const total = a.reduce(reducer)

    return <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
}

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

const Course = ({ courses }) => {
    return (
        <div>
            {courses.map(course =>
                <div key={course.id}>
                    <Header course={course} />
                    <Total parts={course.parts} />
                </div>
            )}
        </div>
    )
}
export default Course
