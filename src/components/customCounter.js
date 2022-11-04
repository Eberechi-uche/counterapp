import useCounter from './useCounter'


function Customcounter(){

    const {reset, setValue, increment, decrement, count, initValue} = useCounter()
    return(
    <div>
      <div className="card center ">
        <div className="card-body">
              <h5 className="card-title large-text">{count}</h5>
              <div className="btn-group" role="group" aria-label="Basic example">
                  <button onClick={decrement} type="button" class="btn btn-danger">decrement</button>
                  <button onClick={reset} type="button" class="btn btn-primary"> reset</button>
                  <button onClick={increment} type="button" class="btn btn-success">increment</button>
              </div>
        </div>
        
      </div>
      <div className="input input-group  ">
          <div className="input-group-text" id="btnGroupAddon">count Value:{initValue}</div>
          <input   onChange={(e)=>{
            if(e.target.value.length < 1){
              setValue(1)
            }else{

              setValue(e)
            }
            }}  type="number" className="form-control" placeholder="set your count Value" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
      </div>
    </div>
       
      
  )
}
export default Customcounter;