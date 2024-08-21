import React, { useState } from 'react';
import '../../App.css'; // Import the custom CSS file
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";

const Curve = () => {
    const [showCurve, setShowCurve] = useState(false);

    const handleClick = () => {
        setShowCurve(true);
    };

    return (
        <>
            <div key="maindiv" style={{display:'flex',flexDirection:'column'}}>
                <h1 style={{textAlign:'center',fontSize:'50px'}}>OUR PORTFOLIO</h1>
                <h3 style={{textAlign:'center'}}>A Showcase Of Our Innovation And Excellence</h3>
                <p style={{textAlign:'center'}}>Discover How Our Cutting-edge Solutions Expertise Transforms Client Visions Into Reality</p>
                <button onClick={handleClick} style={{margin:'auto'}}> click me </button>
            </div>
            <div className={`curve-container ${showCurve ? 'active' : 'hidden'}`}>
                <div className="image-grid">
                    <img src={img1} alt="Image 1" />
                    <img src={img2} alt="Image 2" />
                    <img src={img3} alt="Image 3" />
                    <img src={img4} alt="Image 4" />
                    <img src={img5} alt="Image 5" />
                    <img src={img6} alt="Image 6" />
                </div>
            </div>
        </>
    );
};

export default Curve;
