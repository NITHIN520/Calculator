import React from "react";
import { useState } from "react";
function Mycomponent() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>increment</button>
            </div>
    );
}
// function Mycomponent({isLoggedin}) {
//     if(isLoggedin) {
//         return <h1>Welcome back!</h1>;
//     } else {
//         return <h1>please log in</h1>
//     }
// }
// return (
//     <div>
//         {isLoggedin ? <h1>Welcome back</h1>: <h1>please log in </h1>}
//     </div>
// );
// }
export default Mycomponent;