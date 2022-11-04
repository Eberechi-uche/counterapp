import {NavLink, Link} from 'react-router-dom'
function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" ><Link className='nav-link' to='/'>ClickC0unter</Link></p>
            <div className="navbar-nav">
              <NavLink className="nav-link" to='/'>useReducer</NavLink>
              <NavLink className="nav-link" to='/Customcounter'>Customcounter</NavLink>
            </div>
        </div>
      </nav>
    )
}
export default Nav;