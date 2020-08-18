import {toast} from "react-toastify"



 const authReducer = (state={}, action) => {


    switch(action.type) {
        case "SIGN_IN":
            toast("YOU're back ...");
            return state;
        case "SIGN_IN_ERR":
            toast.error("An error, check yourself")
            return state;

        case "SIGN_OUT":
            toast("Hey, you're signed out")
            return state;
        case "SIGN_Up":
            toast("Hey there");
            return state;
        case "SIGN_UP_ERR":
            toast.error("An error, check yourself")
            return state;

        
            default:
                return state;

    
      }   










 }


 export default authReducer
