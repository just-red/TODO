import React from 'react'
import Task from './Task'
import { connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";



 const Tasks = ({tasks}) => {
    return (
        <>
            <table className="table table-borderless table-dark container"
            
            style={{marginTop : "30px"}}
            
            >
                <thead>
                    <tr className="text-info">
                        <th scope="col">Tasks</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Task Status</th>
                        <th scope="col">Delete Task ?</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map(task => <Task task={task}

                        key={task.id}


                    />)}
                
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = state => {

    console.log(state)
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks : tasks,
        
    };

}

export default compose (
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection : "tasks",
            orderBy: ["date", "desc"]
        }
    ])
)(Tasks);


