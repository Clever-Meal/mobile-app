import React, { createContext, useContext, useReducer } from 'react';


const permissionContext = createContext()

function reducer(state, {type}){
    switch(type){
        case 'ALLOWED': {
            return true
        }
        case 'DENIED': {
            return false
        }
        default: 
            return state;        
    }
}

const initialState = null;


const PermissionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <permissionContext.Provider value={{
            state,
            dispatch
        }} >
            {children}
        </permissionContext.Provider>
    );
}

const usePermission = () => {
    const { state, dispatch } = useContext(permissionContext)
    const setAllowed = () =>
      dispatch({ type: "ALLOWED"})
    const setDenied = () =>
      dispatch({ type: "DENIED"})
    return {
      state,
      setAllowed,
      setDenied
    }
}

export { usePermission, PermissionProvider };