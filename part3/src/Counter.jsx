import { useState } from "react";

function init(){
    console.log("init function is called");
    return Math.floor(Math.random() * 100);
}

export default function Counter(){
    let [count,setCount] = useState(()=>{
        return init(); //initialization function is called only once when the component is mounted
    });
    console.log("component is rendered");
    console.log(`before incCount(), count = ${count}`);

    function incCount(){
        setCount((count)=>{
            return count+1; //setState is asynchronous, so we use the function form to get the latest value
        });
       
        console.log(`inside incCount()2, count = ${count}`);
        // setCount(count+1);  //Calling setState multiple times in the same function with same value has no effect.
    }
    console.log(`after incCount(), count = ${count}`);   
    return(
        <div>
            <h1>States in React</h1>
            <h3>Count = {count} </h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}