import { useState, useEffect } from "react";
function Timer() {
    //useState Hook: 
    let i = 0;
    const [count, setCount] = useState(0);

    //useEffect Hook
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
        i++;
      }, 1000); // 1 seconds, increase the 'count' by 1.
    });
  
    return (
        <div className="bg-warning m-3">
            <p>Timer: {count} and {i}</p>
        </div>
    );
}
export default Timer;