import {Link} from 'react-router-dom'

const Notfound = ()=>{
    return(
        <div>
            <h1>
                sorry page not found
            </h1>
            <p>
                return home
            </p>
            <button  type="button" class="btn btn-success"><Link className='nav-link' to='/'>Home</Link></button>
        </div>
    )
}
export default Notfound;