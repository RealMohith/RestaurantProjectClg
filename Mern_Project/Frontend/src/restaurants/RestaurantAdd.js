import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from "../header/LoggedInHeader";
import restaurantsService from '../services/RestaurantsService';

function RestaurantAdd() {
    const initRestaurant = {
        name: "",
        password: "",
        type: "chinese",
        location: "",
        rating: 1,
        topFood: ""
    };
    
    const [restaurant, setRestaurant] = useState(initRestaurant);
    const navigate = useNavigate();
    
    const onInputChange = function(event) {
        const changedRestaurant = {...restaurant};
        changedRestaurant[event.target.id] = event.target.value;
        setRestaurant(changedRestaurant);
    }
    
    const doCreateRestaurant = async function(event) {
        if(!window.confirm(`Are you sure to create the restaurant '${restaurant.name}'?`)) {
            return;
        }
        
        try {
            await restaurantsService.create(restaurant);
            alert('Restaurant created successfully.');
            navigate("/restaurants/list");
        } catch(error) {
            console.log('Error creating restaurant:', error);
            alert('Error creating restaurant');
        }
    }

    return (
        <>
            <LoggedInHeader/>
            <div className="container">
                <a href="/restaurants/list" className="btn btn-light">&lt;&lt;Go Back</a>
                <h3>Add Restaurant</h3>
                <div className="form-group">
                    <label htmlFor="name">Restaurant Name</label>
                    <input type="text" className="form-control" id="name" 
                           value={restaurant.name} onChange={onInputChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                           value={restaurant.password} onChange={onInputChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" id="type" 
                            value={restaurant.type} onChange={onInputChange}>
                        <option value="chinese">Chinese</option>
                        <option value="thai">Thai</option>
                        <option value="continental">Continental</option>
                        <option value="south">South Indian</option>
                        <option value="north">North Indian</option>
                        <option value="andhra">Andhra</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location"
                           value={restaurant.location} onChange={onInputChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input type="number" min="1" max="5" className="form-control" id="rating"
                           value={restaurant.rating} onChange={onInputChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="topFood">Top Food</label>
                    <input type="text" className="form-control" id="topFood"
                           value={restaurant.topFood} onChange={onInputChange}/>
                </div>
                
                <button type="button" className="btn btn-success mt-3"
                        onClick={doCreateRestaurant}>Create Restaurant</button>
            </div>
        </>
    );
}

export default RestaurantAdd; 