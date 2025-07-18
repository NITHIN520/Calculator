import React from "react";
function GrandChild(props) {
    return <p>{props.message}</p>;
}
function Child(props) {
    return (
        <div>
            <h2>child component</h2>
            <GrandChild message={props.message} />
        </div>
    );
}
function Parent() {
    const message = "Hello from Parent!";
    return (
        <div>
            <h1>Parent Component</h1>
            <Child message={message} />
        </div>
    );
}
export default Parent;