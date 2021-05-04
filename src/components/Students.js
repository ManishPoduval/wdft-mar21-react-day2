import React, {useState} from 'react'
import data from '../students.json'
import StudentDetail from './StudentDetail'

export default function Students() {

    const [students, updateStudents] = useState(data)

    const handleSort = () => {
        // sort the students here 
        // re render the component
        // use the sort()

        // when you use array methods that mutate/change the original array always deep clone it
        let clonedStudent = JSON.parse(JSON.stringify(students))

        clonedStudent.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if(a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        
        //update the original state after sort is done
        // calls the hooks handler declared on line 6
        updateStudents(clonedStudent)

    }

    const handleAdd = () => {
        // grab a random value from data
        // add it to students
        let randomIndex = Math.floor(Math.random() * data.length)
        let elem  = data[randomIndex]

        // using the spread operator to grab all elemtents of students one by one and store it in the new array
        // [...this.state.students]

        // calls the hooks handler declared on line 6
        updateStudents( [elem, ...students])

    }

    const handleDelete = (someId) => {
        console.log('Delete works', someId)
        
        // keep all the elements that do not match the id
        let filteredStudents = students.filter((singleKid) => {
            // return is a condition on how to filter elements
            return singleKid.id !== someId
        })

        // calls the hooks handler declared on line 6
        updateStudents(filteredStudents)
    }


    return (
        <>
            <button onClick={handleSort}>Sort</button>
            <button onClick={handleAdd}>Add</button>
                { 
                // key is used internally by React to uniquely identify similar elements/components
                // can never be accessed in props
                    students.map((singleStudent, index) => {
                        return <StudentDetail 
                                key={index}    
                                student={singleStudent}
                                onDelete={handleDelete}
                                />
                    })
                }
            </>
    )
}


