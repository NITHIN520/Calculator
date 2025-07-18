import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= 5) return; // Stop after 5 increments

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, [count]); // Run effect every time count changes

    return (
        <p>I've rendered {count} {count === 1 ? 'time' : 'times'}</p>
    );
}

export default Timer;
