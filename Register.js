import React from 'react';
function Register(){
    return(
        <div style={{backgroundImage:`url("https://images8.alphacoders.com/650/650205.jpg")`,
        height:"700px",width:"1480px",marginTop:"20px"
        }}>
            <h1 style={{color:"black",textAlign:"center",padding:"60px",fontFamily:"fantasy"}}>BOOK NOW</h1>
            <form>
                <center>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>NAME:<br></br>
        <input type="text" style={{borderRadius:"20px"}}/>
      </label><br></br>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>ADDRESS:<br></br>
        <input type="text" style={{borderRadius:"20px"}}/>
      </label><br></br>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>E-MAIL:<br></br>
        <input type="text" style={{borderRadius:"20px"}}/>
      </label><br></br>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>PHONE NO:<br></br>
        <input type="text" style={{borderRadius:"20px"}}/>
      </label><br></br><br></br>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>BOOKING DOGS:
      <select>
        <option></option>
        <option>Labrador</option>
        <option>Goldenretriever</option>
        <option>Rottweiler</option>
        <option>Husky</option>
        <option>Dobermann</option>
        <option>Pomarian</option>
        
      </select>
      </label><br></br><br></br>
      <label style={{color:"Black",fontSize:"15px",fontFamily:"fantasy"}}>BOOKING PLACES:
          <select>
        <option></option>
        
        <option>Rajahmundry</option>
        <option>Kakinada</option>
          </select>
      </label>
      <br/><br/>
      <button type="submit" className="btn btn-primary">Submit</button>
      </center>
    </form>
        </div>
    )
}
export default Register