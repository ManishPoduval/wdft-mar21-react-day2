import React from 'react'

//destructuring props in the parameter
function StudentDetail( {student, onDelete} ) {

    //props will look like this
    /*
    props = {
        student: Object,
        onDelete: Function
    }
    */
    
    
    const {name, city, id} = student
    return (
        <div>
            <h1>{name}</h1>
            <p>From {city}</p>
            <button onClick={() => { onDelete(id) }}>Delete</button>
        </div>
    )
}

export default StudentDetail
