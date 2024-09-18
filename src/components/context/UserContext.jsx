import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(true);

    const Login = () => {
        setUser(true)
    }

    const Logout = () => {
        setUser(false)
    }
    
    return (
        <UserContext.Provider value={{ user, Login, Logout }}>
        {children}
        </UserContext.Provider>
);
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
