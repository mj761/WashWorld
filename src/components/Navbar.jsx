import React from 'react';
import Picture from '../WashWorld-5.png';


export default function Nav(){
    return(
        <nav className="myNav">
           <a href="#"> <img src={Picture} alt="logo"></img> </a>
        </nav>
       
    )

}