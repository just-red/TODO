import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTask} from '../../actions/actionTask/actionTask'

class AddTask extends Component {
    state = {

        taskDescript: "",
        checked : false
        


    }

    changeHandle = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    submitHandle = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)
        document.getElementById("AddTaskForm").reset()
        console.log(this.state)
    }


    render() {
        return (
            <>



                <form id="AddTaskForm" className="container" autoComplete="off"
                    style={{ marginTop: "30px" }}
                    onSubmit={this.submitHandle}>


                    <legend>
                    </legend>


                    <div className="form-group">
                        <label htmlFor="task">Add a task</label>

                        <input type="text" className="form-control"
                         id="task" onChange={this.changeHandle}></input>
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>





            </>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask : task => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)