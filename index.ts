const redux = require("redux")
const createStore = redux.createStore

const CHANGE_USER = "CHANGE_USER";
const LOGOUT = "LOGOUT"

// actions
function changeUser(user){
    return{
        type: CHANGE_USER,
        info: "Change the current user",
        payload: user
    }
}

function logout(){
    return{
        type: LOGOUT,
        info: "logou the current user",
    }
}

const initialState = {
    user: "",
    isLogged: false
}

function userReducer(prevState = initialState, action){
    switch(action.type){
        case CHANGE_USER:
            return{
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return{
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}

const store = createStore(userReducer)

console.log("Initial state", store.getState()) //log initial value => void string
store.dispatch(changeUser("Creitin")) // Switch the initial value for a new state
console.log("new state", store.getState()) // log the new value for the state
store.dispatch(logout()) // Switch the new state for the initial value again
console.log("new state logout", store.getState()) // log the initial value, like the user are really logout