import React, { Component } from 'react'
import data from '../students.json'
import StudentDetail from './StudentDetail'

class Students extends Component {

    // create a new state, 
    // storing all json data in the students state
    state = {
        students: data
    }

    handleSort = () => {
        // sort the students here 
        // re render the component
        // use the sort()
        // use the setState({}, callback)

        // when you use array methods that mutate/change the original array always deep clone it
        const {students} = this.state
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
        this.setState({
            students: clonedStudent
        })

    }

    handleAdd = () => {
        // grab a random value from data
        // add it to students
        let randomIndex = Math.floor(Math.random() * data.length)
        let elem  = data[randomIndex]

        // using the spread operator to grab all elemtents of students one by one and store it in the new array
        // [...this.state.students]
        this.setState({
            students: [elem, ...this.state.students]
        })

    }

    handleDelete = (someId) => {
        console.log('Delete works', someId)
        
        const {students} = this.state

        // keep all the elements that do not match the id
        let filteredStudents = students.filter((singleKid) => {
            // return is a condition on how to filter elements
            return singleKid.id !== someId
        })

        this.setState({
            students: filteredStudents
        })

    }

    render() {
        const {students} = this.state
        return (
            <>
            <button onClick={this.handleSort}>Sort</button>
            <button onClick={this.handleAdd}>Add</button>
                { 
                // key is used internally by React to uniquely identify similar elements/components
                // can never be accessed in props
                    students.map((singleStudent, index) => {
                        return <StudentDetail 
                                key={index}    
                                student={singleStudent}
                                onDelete={this.handleDelete}
                                />
                    })
                }
            </>
        )
    }
}


export default Students