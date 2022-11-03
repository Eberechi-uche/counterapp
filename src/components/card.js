function Card({setCard}){


    return(
    
    <div className="card text-bg-dark mb-3" >
        <div className="card-header">Hello</div>
        <div className="card-body">
            <p className="card-text">use the input to set your count step. 
            The count Value shows you your count, 
            clicking reset sets the count Value to 1, 
            also if no input is made the count value is set to 1.
            happy clicking
            </p>
            <button onClick={()=>{setCard(false)}} className=" button btn btn-success"><span>proceed</span></button>
        </div>
</div>
)
}
export default Card;