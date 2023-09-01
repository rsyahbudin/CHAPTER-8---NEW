import React, { createContext, userReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    user:[]
};

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = userReducer(AppReducer, initialState);

    // Action
    const removeUser = (id) => {
        dispatch({
            type: "REMOVE_USER",
            payload: id,
        });
    };

    const addUser = (id) => {
        dispatch({
            type: "ADD_USER",
            payload: user,
        });
    };

    const editUser = (id) => {
        dispatch({
            type: "EDIT_USER",
            payload: user,
        });
    };

    return (
        <GlobalContext.Provider
          value={{
            users: state.users,
            removeUser,
            addUser,
            editUser,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    
};

