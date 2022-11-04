import { useReducer, useState } from "react";


let initialState = 0;
const reducer = (state, action)=>{
    let useCount = action.counter;
console.log(action)
// const {type, counter} = action
    switch(action.type){
        case 'increment':
            return state + useCount;
        case 'decrement':
            return state - useCount;
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

function Counter(){
    const [count, dispatch]= useReducer(reducer, initialState);
    const [useCount, setUseCount] = useState(1)

    function getCounter(e){
        let CountValue = +e.target.value
        setUseCount(CountValue)
    }
       return (
        
        < >
        <div className="center">
        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="input-group ">
                        <div className="input-group-text" id="btnGroupAddon">count Value:{useCount}</div>
                        <input   onChange={(e)=>{getCounter(e)}}  type="number" className="form-control" placeholder="set your count Value" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                        </div>
                    </div>
                        <div className="btn-group " role="group" aria-label="large button group">
                            <button onClick={()=>{dispatch({type:'decrement', counter:useCount })}} type="button" className="button-left btn btn-danger"><span>decrement</span></button>
                            <button type="button" class="btn btn-dark">{count}</button>
                            <button onClick={()=>{dispatch({type:'increment',counter:useCount })}} type="button" className=" button btn btn-success"><span>increment</span></button>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button onClick={()=>{dispatch({type:'reset', counter:useCount}); setUseCount(1)}} className="btn btn-primary button-reset" type="button"><span className="word">Reset</span><span className="content"></span></button>
         </div>

        </div>
         
     </>
        
       
      )
}

export default Counter;