import {NavLink} from 'react-router-dom'
function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p class="navbar-brand" href="#">ClickCounter</p>
            <div className="navbar-nav">
              <NavLink className="nav-link" to='/'>useReducer</NavLink>
              <NavLink className="nav-link" to='/Customcounter'>Customcounter</NavLink>
            </div>
        </div>
      </nav>
    )
}
export default Nav;