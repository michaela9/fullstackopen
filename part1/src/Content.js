import React from 'react'

const Content = ({course}) => (
    <div>
        {course.parts.map(value => (
            <p>{value.name} has {value.exercises}</p>
        ))}
    </div>
    )

export default Content