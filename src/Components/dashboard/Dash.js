import React from 'react'
import AddTask from '../tasks/AddTask'
import Tasks from '../tasks/Tasks'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

 const Dash = ({uid}) => {

    if(!uid) return <Redirect to="/signin"/>
    return (
        <div>
            
            <AddTask/>
            <Tasks/>
        </div>
    )
}


const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

export default connect(mapStateToProps)(Dash)