
import { Link, NavLink } from "react-router-dom";
function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    // using of internal styling to active-link using NavLink instead of Link by react-router-dom
    return (
        <header>       
        <Link to='/' className='site-logo'>#VAN-LIFE </Link>
        <nav>
            <NavLink
                    to='/about'
                    style={({isActive})=> isActive ? activeStyles:null }>About</NavLink>
                <NavLink to='/vans' style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to='/host' style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
        </nav>
        </header> 
    )
}
export default Header;