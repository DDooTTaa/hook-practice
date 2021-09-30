import React from "react";
import Header from "./Header";
import { useFns } from "./context";

const Screen = () => {
    const { logUserIn, logUserout } = useFns();
    return (
        <div>
            <Header />
            <h1>First screen</h1>
            <button onClick={logUserIn}>Log user in</button>
            <button onClick={logUserout}>Log OUT user</button>
        </div>
    );
};
export default Screen;