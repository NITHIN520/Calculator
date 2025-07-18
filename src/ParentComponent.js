import React,{createContext,useContext}from "react";
const infoContext = createContext();
function ChildComponent() {
    const info = useContext(infoContext);
    return <p>{info}</p>;
}
function ParentComponent() {
    const info = "Hello from ParentComponent!";
    return (
        <infoContext.Provider value={info}>
            <ChildComponent />
        </infoContext.Provider>
    );
}
export default ParentComponent;