import React from 'react'
import Icon1 from './icons/instagram.png'
import Icon2 from './icons/W.png'
import Icon3 from './icons/twitter.png'
import My_img from './img/me.jpg'


function Contact(){

    return(
        <div className ="container_1">
            <div id ="my-contact">
                <h1 id = "Contact">Contact Us</h1>
            </div>
            <div className = "Post-card">
            <div className = "item_1">
                <img  id =  "me" src ={My_img}  alt = "mybiography"/>
                <ul id = "my-list">
                    <li><img id = "icon" src = {Icon1} alt = "icons" /></li>
                    <li><img id = "icon" src = {Icon2} alt = "icons" /></li>
                    <li><img id = "icon" src = {Icon3} alt = "icons" /></li>
                </ul>
            </div>
            <div className = "item_2">
                <h1>Adil Akothiyat</h1>
                <div id ="line"></div>
                <h3>Graphic and Web Designer</h3>
                <p>
                    Graphic and Web design is more than job for me.I start the first programming language (HTML), Whene I beggin create my first code, I fell so supprised because it not hard to start, but to continue. Also learning about programming and front-end design, give me the chance to continue, I admire styling languages(Csss,css). The reason for me is create my first website and share it with my friends. <span id = "clr">#MYFIRSTWEBSITE</span> 
                </p>
            </div>
            </div>
        </div>
    );
}

export default Contact;
