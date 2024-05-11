import React, { useEffect, useState } from "react";
import '../../server';
import { Link } from "react-router-dom";

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);


    return (
        <div className="van-list-container">
        <div className="van-list">
        
        {vans.map((van) => {
            return (
            <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name},priced at $${van.price} per day`} >
            <img src={van.imageUrl} alt="van image" />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
            
        )}
         )}
        
        </div>
        </div>
    
              
    ) }
      
        

    


export default Vans;