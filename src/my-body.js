import React from 'react';
import Mee from './img/M.jpg';

function Body(){

    let open = false;

function openS(){
    let text = document.querySelector('.my-h1');

    if(open === false){
        text.style.visibility = "visible";

        open = true;
    }
    else if(open === true){
        text.style.visibility = "hidden";

        open = false;
    }

};

let mouve = true;

function Mov(){
    let line = document.querySelector('.my_line_');

    if(mouve === true){
        line.style.width = "30%";

        mouve = false;
    }

    else if(mouve === false){
        line.style.width = "100px"

        mouve = true;
    }
}
    return(
        <div className ="container">
            <div className = "main-container">
                <h1 onMouseEnter = {Mov} id = "Home">Welcome here in my WebSite, I'm Adil</h1>
                <div className = "my_line_"></div>
                    <div className = "main-item">
                            <div id = "mine">
                                <img src = {Mee} alt = "me" />
                            </div>
                            <div id  = "pgraph">
                                    <p>
                                        <span id = "sp_1">Hi everyfriend</span> <br />
                                        I'm Adil Akothiyat, I'm from Morroco, my home city is Tangir. I like coding and programming language, my favourite job in programming is a front-end designer.
                                        I beggin learn HTML firstly, whene I finished I continue learning other language like CSS, Javascript, React. But the basic is three languages (HTML, CSS, Javascript).
                                        I wish you to learn programming language, because it the futur and Have a good chance in your work.<br />
                                        <span id = "sp_2">Just Do some thing !!</span>
                                </p>
                                <h4 onClickCapture = {openS} className = "my-button">Read More</h4>
                                <h1 className ="my-h1">Yes We Can !!</h1>
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default Body;