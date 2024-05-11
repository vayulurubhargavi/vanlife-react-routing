import { Link, Outlet ,NavLink} from "react-router-dom";

function HostLayout() {
  
    
    return (
        <>
        <nav className="host-nav"> 
            <NavLink to='.' end className={({isActive})=> isActive? "active-link":null}>Dashboard</NavLink>
            <NavLink to='income'className={({isActive})=> isActive? "active-link":null}>Income</NavLink>
            <NavLink to='review' className={({ isActive }) => isActive ? "active-link" : null}>Review</NavLink>   
            <NavLink to='vans' className={({ isActive }) => isActive ? "active-link" : null}>Vans</NavLink>   

        </nav> 
        <Outlet />
        </>
    )
}
export default HostLayout;