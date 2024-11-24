import React, {useEffect, useState} from 'react';
import HandleRemove from './HandleRemove.jsx';
import ViewMore from './ViewMore.jsx';



function Gallery({tours, setTours, visibleTours, setVisibleTours}) 
 {

const [isLoading, setIsLoading] = useState(true); //state to display loading
const [error, setError] = useState(null); //state to display errors

   useEffect(() => {
    const apiUrl = 'https://course-api.com/react-tours-project'; 
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //using cors to prevent access issues
    fetch(proxyUrl + apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); //throw error
        }
        return response.json(); // Parse the response as JSON  
    })
    .then(data =>{
        setIsLoading(false); //set loading status as false
        setTours(data);} //set tours as the data from fetch
        )
    .catch(error => { //catching error with fetch
        setError(error.message); //display error message
        setIsLoading(false);
    });

}, [])  

const handleToggleVisibility = (tourId) => {
    setVisibleTours(prevState => ({
      ...prevState,
      [tourId]: !prevState[tourId], //toggle between visibility states
    }));
  };

if (isLoading) {
    return (
        <div>
            <h3>Loading...</h3> {/*display loading message*/}
        </div>
    )}

if (error) {
    return (
        <div>
            <h3>Error: {error}</h3> {/*error message displayed*/}
        </div>
    )
}

return (
    <div>
        {tours.map(tour => (
            <div key={tour.id}> {/*display tour details */}
            <p>Tour Name: {tour.name}</p>
            <p>Price: {tour.price}</p>
            <img src={tour.image} alt={tour.name} />
            <br />
            <ViewMore 
            description= {tour.info} 
            isVisible={visibleTours[tour.id] || false} 
            setIsVisible={() => handleToggleVisibility(tour.id)}  
            /> {/*passing props for View More component */}
            <button onClick={()=> HandleRemove(tour.id, tours, setTours)}>Not Interested</button> {/*passing required proprs to HandleRemove component */}
            </div>


        ))}
    </div>
)
}

export default Gallery;