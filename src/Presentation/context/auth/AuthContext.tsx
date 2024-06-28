import { createContext, useReducer } from "react";
import { User } from "../../../Domain/entities/User";
import { AuthState, authReducer } from "./AuthReducer";

type AuthContextProps = {
    user: User | null;
    status: 'authenticated' | 'not-authenticated' | 'checking';
    auth(user: User): void;
    logout: () => void;
    updateUser: (user: User) => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    user: null
}

export const AuthContext = createContext({} as AuthContextProps);



export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const checkToken = () => {

    }

    const auth = async (user: User) => {
        dispatch({
            type: 'auth',
            payload: {user}
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    const updateUser = async (user: User) => {
        dispatch({
            type: 'update-user',
            payload: {user}
        
        })
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                auth,
                logout,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}