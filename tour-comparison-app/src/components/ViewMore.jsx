import React, {useState} from "react";

function ViewMore({description, isVisible, setIsVisible}) //bringing required props from Gallery.jsx
{
    

    return (
        <div>
        <p className="tour-description">{isVisible ? description : ''}</p> {/*displaying the description if description status is false on button click */}
        <button className="view-more-button" onClick={setIsVisible}>{isVisible ? 'Show Less' : 'View More'}</button> {/*changing the button content by checking if description  is being displayed */}
        </div>

    )
}

export default ViewMore;