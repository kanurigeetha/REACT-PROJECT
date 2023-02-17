import React from "react";

function About(){
    return(
<div style={{backgroundImage:`url("https://img5.goodfon.com/wallpaper/nbig/b/54/priroda-vetki-listia-zhivotnoe-sobaka-pios-poza.jpg")`,
height:"700px",width:"1480px",marginTop:"20px"
}}>
    
    <h1 style={{fonntSize:"1000px",textAlign:"center",color:"black",fontFamily:"fantasy",padding:"30px"}}>Dog Breads</h1>
     <br></br>
     <div>
     <div className="row">
  <div className="col-md-4" style={{backgroundColor:"white",height:"350px",width:"350px",marginLeft:"60px",borderRadius:"20px"}}>
    <h1 style={{textAlign:"center",color:"black",fontFamily:"fantasy",margin:"18px"}}>Labrador</h1><br></br>
    <h3 style={{fontSize:"12px"}}>The Labrador Retriever or simply Labrador is a British breed of retriever gun dog.
     It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland, 
     and was named after the Labrador region of that colony.</h3><br/>
      <button type="button" className="btn btn-warning"><a href="
https://www.akc.org/dog-breeds/labrador-retriever/">About</a></button>
  </div>
  <div className="col-md-4" style={{backgroundColor:"white",height:"350px",width:"350px",marginLeft:"180px",borderRadius:"20px"}}>
  <h1 style={{textAlign:"center",color:"black",fontFamily:"fantasy",margin:"18px"}}>Goldenretriever</h1><br></br>
  <h3 style={{fontSize:"12px"}}>The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. 
  The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark.</h3><br></br>
  <button type="button" className="btn btn-warning"><a href="
https://www.akc.org/dog-breeds/golden-retriever/">About</a></button>
  
  </div>
  <div className="col-md-4" style={{backgroundColor:"white",height:"350px",width:"350px",marginLeft:"180px",borderRadius:"20px"}}>
  <h1 style={{textAlign:"center",color:"black",fontFamily:"fantasy",margin:"18px"}}>Rottweiler</h1><br></br>
  <h3 style={{fontSize:"12px"}}>The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, 
  because their main use was to herd livestock and pull carts laden with butchered meat to market. </h3><br></br>
  <button type="button" className="btn btn-warning"><a href="
https://www.akc.org/dog-breeds/rottweiler/">About</a></button>
  
  </div>
  
  </div>


  </div>
</div>
    )
}
export default About