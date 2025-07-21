import { useState } from 'react';
function Counter() {
    //Declare state "count":"setCount" is function to set value of "count", and initial value = 0.
    const [count, setCount] = useState(0);
    //Function handleClick to respond to "click" event
    let handleClick =() => { setCount(count + 1);}
    //UI
    return (
    <div>
        <p className="m-3 d-inline">Counter: {count}</p>
        <button className="btn btn-success m-3" onClick={handleClick} > Increment </button>
    </div>
    );
}
export default Counter;