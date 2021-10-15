import React from 'react'

const Total = ({course}) =>  (
        <p>Total number of exercises is {course.parts[0].exercises + course.parts[1].exercises +course.parts[2].exercises} .</p>
    )

export default Total