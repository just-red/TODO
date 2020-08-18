import React from 'react'
import moment from 'moment'
import { removeTask, toggleChecked } from '../../actions/actionTask/actionTask'
import {connect} from "react-redux"
import Check from '../Check'
import {isChecked} from "../../actions/actionTask/actionTask"

const Task = ({task, removeTask , isChecked}) => {
    
    const handleRemove = task => {
        removeTask(task);
    }

    const handleCheck = task => {
        isChecked(task)
    }





    return (
        <>
            <tr>
                <th scope="row">{task.task}</th>
                <td>{moment(task.date.toDate()).calendar()}</td>
                <td>
                
                    <Check onClick={() => handleCheck(task)}


                        checked = {task.checked}
                    />
               </td>

                <td>
                   

                    <span className="material-icons text-primary " 
                    style={{ cursor: "pointer" }}
                    
                    onClick = {()=> handleRemove(task)}
                    
                    >
                        delete
                </span>

                </td>
            </tr>

            
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeTask : task => dispatch(removeTask(task)),
        isChecked : task => dispatch(isChecked(task))
    
    }
}



export default connect(null, mapDispatchToProps)(Task)