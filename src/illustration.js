import React from 'react'
import Photo1 from './img/phot1.jpg'
import Photo2 from './img/phot2.jpg'
import Photo3 from './img/phot3.jpg'



function Illustration() {
    return(
        <div className= "main-illustration">
                <div id  = "About">
                 <h1 id = "About">About Us</h1>
                </div>
            <div className ="illustration">
                <div className = "Card">
                    <img src ={Photo1} alt = "Morroco" />
                    <h3>Art</h3>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel expedita ad, sint voluptas nobis aperiam.
                    </p>
                    <h4>Visit</h4>
                    
                </div>
                <div className = "Card">
                    <img src ={Photo2}  alt = "Marrakech" /> 
                    <h3>Marrakech</h3>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel expedita ad, sint voluptas nobis aperiam.
                    </p>
                    <h4>Visit</h4>
                </div>          
                <div className = "Card">
                    <img src ={Photo3} alt = "Food" />
                    <h3>Food</h3>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel expedita ad, sint voluptas nobis aperiam.
                    </p>
                    <h4>Visit</h4>
                </div>
            </div>
        </div>
    );
}

export default Illustration;