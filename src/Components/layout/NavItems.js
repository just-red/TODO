import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from "../../actions/actionTask/Authen"
import {connect } from "react-redux"



 const NavItems = ({signOut, uid}) => {

    if(uid){
        
        return(
<Link to="/signin" className="nav-link" onClick={signOut} >
                Sign out</Link>
        )
    }
    else{
        
    return (
        <>
  
        <Link to="/signup" className="nav-link">
        Sign up
            
        </Link>

        <Link to="/signin" className="nav-link">
        Sign-in
            
        </Link>
        </>
    )

    }

}


const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    return {
        uid : uid
    }
}



const mapToDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}



export default connect(mapStateToProps,mapToDispatchToProps) (NavItems);