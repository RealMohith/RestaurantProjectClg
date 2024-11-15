import { useState, useEffect } from 'react';
import LoggedInHeader from "../header/LoggedInHeader";
import restaurantsService from '../services/RestaurantsService';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    
    const loadRestaurants = async function() {
        try {
            const response = await restaurantsService.readAll();
            setRestaurants(response.data);
        } catch(error) {
            console.log('Error loading restaurants:', error);
            alert('Error loading restaurants');
        }
    }

    useEffect(() => {
        loadRestaurants();
    }, []);

    const deleteRestaurant = async function(restaurant) {
        if(!window.confirm(`Are you sure to delete the restaurant '${restaurant.name}'?`)) {
            return;
        }
        
        try {
            await restaurantsService.delete(restaurant.name);
            alert('Restaurant deleted successfully');
            loadRestaurants();
        } catch(error) {
            console.log('Error deleting restaurant:', error);
            alert('Error deleting restaurant');
        }
    }

    return (
        <>
            <LoggedInHeader/>
            <div className="container">
                <h3>Restaurants List</h3>
                <a href="/restaurants/add" className="btn btn-success">Add Restaurant</a>
                <table className="table table-stripped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Rating</th>
                            <th>Top Food</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurants.map(restaurant => (
                            <tr key={restaurant.name}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.type}</td>
                                <td>{restaurant.location}</td>
                                <td>{restaurant.rating}</td>
                                <td>{restaurant.topFood}</td>
                                <td>
                                    <a href={`/restaurants/edit/${restaurant.name}`} 
                                       className="btn btn-warning">Edit</a>&nbsp;&nbsp;
                                    <button className="btn btn-danger" 
                                            onClick={() => deleteRestaurant(restaurant)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RestaurantList; 