import React from 'react';

function HandleRemove(id, tours, setTours) //bringing tour id for which button is clicked
{ 
   const updatedTours = tours.filter((tour) => (tour.id !== id)); //creating udpated array with current tour removed
   return setTours(updatedTours); //setting tours as the updated tours array
}

export default HandleRemove;