import React, { Component } from 'react'
import {signIn} from "../../actions/actionTask/Authen"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"



class Signin extends Component {
 state = {

    email : "",
    password : ""


 }

changeHandle = (event) =>{
this.setState({
    [event.target.id] : event.target.value,
})}

submitHandle = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.signIn(this.state)
}


 render() {
    const {uid} = this.props
    if(uid) return <Redirect to="/"/>



  return(
   <>
       


          <form className ="container" autoComplete="off" 
          style ={{marginTop: "30px"}}
          onSubmit = {this.submitHandle}>
          <legend><h4>Sign In</h4></legend>
              <div className="form-group">
                  <label htmlFor="email">Please Enter your email</label>
                  <input type="email" className="form-control" id="email" onChange={this.changeHandle}></input>
              </div>
                  <div className="form-group">
                      <label htmlFor="password">Enter your password</label>
                  <input type="password" className="form-control" id="password"
                  onChange={this.changeHandle}></input>
              </div>
                      
                    <button type="submit" className="btn btn-primary">Sign In !</button>
            </form>





   </>)}
 }

const mapStateToProp = (state) => {
    console.log(state)
    const uid = state.firebase.auth.uid
    return {
        uid: uid,
    }
}




const mapDispatcheToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProp, mapDispatcheToProps)(Signin)
    
  