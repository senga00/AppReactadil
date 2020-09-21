import React from 'react'

function Header(){

    let line1 = 2;

    function Line1(){
        let line_1 = document.querySelector('.line1');
        let line_2 = document.querySelector('.line2');
        let line_3 = document.querySelector('.line3');
        
        if(line1 === 2){
            line_1.style.visibility = "visible";
            line_2.style.visibility = "hidden";
            line_3.style.visibility = 'hidden';
        };

    };

    let line2 = 4;

    function Line2(){
        let line_2 = document.querySelector('.line2');
        let line_1 = document.querySelector('.line1');
        let line_3 = document.querySelector('.line3');

        if(line2 === 4){
            line_1.style.visibility = "hidden";
            line_3.style.visibility = 'hidden';
            line_2.style.visibility = "visible";
            line_2.style.transform = "translate(0,5%)";
        }
    }

    let line3 = 6;

    function Line3(){
        let line_2 = document.querySelector('.line2');
        let line_1 = document.querySelector('.line1');
        let line_3 = document.querySelector('.line3');

        if(line3 === 6){
            line_1.style.visibility = "hidden";
            line_2.style.visibility = "hidden";
            line_3.style.visibility = "visible";
        } 
    }

    let Menu  = true;

    function SliderD(){
        let Sh = document.querySelector('.Humberger');

        if (Menu === true){
            Sh.style.display = "block";
            Sh.style.opacity = "1";

            Menu = false;
        } else if (Menu === false){
            Sh.style.display = "none";
            Sh.style.opacity = ".5";

            Menu = true;
        }
    }


    return(
        <div>
            <div id = "hide" className = "nav">
                <div className ="nav-bar">
                    <h1 className = "Logo">Adilo</h1>
                    <div className = "hid">
                    <ul>
                        <li onClick = {Line1}><a href = "#Home">Home</a>
                        <div className = "line1"></div>
                        </li>
                        <li onClick = {Line2}><a href = "#About">About</a>
                        <div className = "line2"></div>
                        </li>
                        <li onClick = {Line3}><a href = "#Contact">Contact</a>
                        <div className = "line3"></div>
                        </li>
                    </ul>
                    </div>
                    <div onClick = {SliderD} className = "menu-items">
                        <div className = "itm1"></div>
                        <div className = "itm2"></div>
                        <div className = "itm3"></div>
                    </div> 
                </div>         
            </div>
            <nav className = "Humberger">
                    <ul>
                        <li><a href = "#Home">Home</a>
                        </li>
                        <li><a href = "#About">About</a>
                        <div className = "line2"></div>
                        </li>
                        <li onClick = {Line3}><a href = "#Contact">Contact</a>
                        <div className = "line3"></div>
                        </li>
                    </ul>
                    </nav>
        </div>      
    );
};

export default Header;