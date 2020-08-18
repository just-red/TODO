
import {toast} from 'react-toastify'


const taskReducer =(state = {}, action) => {


    switch(action.type){
        case "ADD_TASK": {
            toast.success("New Task Added")
            return state
        }
        case "ADD_TASK_ERR": {
            toast.error("An Error Occurred")
            return state
        }

        case "REMOVE_TASK": {
            toast.warn("A task has been removed");
            return state
        }
        case "REMOVE_TASK_ERR": {
            toast.error("A task removal error has occurred")
            return state
        }
        case "TOGGLE_CHECKED": {
            toast.info("Task changed")
            return state;
        }
        case "TOGGLE_CHECKED_ERR": {
            toast.error("Task changed error occurred")
            return state;
        }
        





        default : return state
    }


}
export default taskReducer