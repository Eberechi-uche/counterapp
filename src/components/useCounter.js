import { useState } from "react"; 

function useCounter(initialState = 0){
    const [count, setCounter] = useState(initialState);
    const [initValue, setInitValue] = useState(1)
    
    const increment = ()=>{
        setCounter(count + initValue)
    }
    const decrement = ()=>{
        setCounter(count - initValue)
        
    }
    const reset = ()=>{
        setInitValue(1)
        setCounter(0)
    }
    const setValue = (e)=>{
        setInitValue(parseInt(e.target.value))
        console.log(e.target.value)
    }
    return{increment, decrement, reset, setValue, count, initValue}
}


export default useCounter;