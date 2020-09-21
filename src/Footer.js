import React from 'react'

function Footer(){
    return(
        <div className = "my_container">
            <div className = "my-footer">
                <div>
                    <ul>
                        <li id = "my_list_1">Design</li>
                        <li id = "my_list_1">Graphics</li>
                        <li id = "my_list_1">Illustration</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li id = "my_list_1">Programming</li>
                        <li id = "my_list_1">Web</li>
                        <li id = "my_list_1">Designer</li>
                    </ul>
                </div>
                <div className = "search">
                    <ul>
                        <li>Searsh</li>
                        <li>
                            <input id = "my-text" type = "text" placeholder = "Searsh" name = "Searsh" />
                            <label htmfor = "Searsh" />
                        </li>
                        <li>
                            <input id = "submit" type = "submit" name = "Searsh" />
                            <label htmfor = "Searsh" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Footer;