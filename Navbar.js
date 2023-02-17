import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
    return(
       <div>
        <div>
            <ul style={{textDecoration:"none",marginLeft:"1390px",display:"inline",listStyle:"none"}}>
                
                 
                <Link to='/'><li style={{float:"left",fontSize:"25px",fontFamily:"cursive",color:"black"}}><b>Home</b></li></Link>
                <Link to='/about'><li style={{float:"left",paddingLeft:"40px",fontSize:"25px",fontFamily:"cursive",color:"black"}}><b>About</b></li></Link>
              
                <Link to='/register'><li style={{float:"left",paddingLeft:"40px",fontSize:"25px",fontFamily:"cursive",color:"black"}}><b>Register</b></li></Link>
            </ul>
        </div>
        </div>
    )
}
export default Navbar
