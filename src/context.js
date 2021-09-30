import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

const UserContextReceiver = ({ children }) => {
    const [user, setUser] = useState({
        name: "JINYONG",
        loggedIn: false
    });
    const logUserIn = () => setUser({ ...user, loggedIn: true });
    const logUserout = () => setUser({ ...user, loggedIn: false });
    return (
        <UserContext.Provider value={{ user, fn: { logUserIn, logUserout } }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}

export const useFns = () => {
    const { fn } = useContext(UserContext);
    return fn;
}

export default UserContextReceiver;