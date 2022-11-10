import {useContext} from "react" ; 
// import { CartContext } from "../../context/CartContext";
import axios from "axios" ; 

// import { useAlert } from "react-alert";

import {Link} from "react-router-dom"
import {useState} from "react"
import "./cardId.css"



export const CardID = ({id,price, Review, image  ,name, type})=>{

//   const alert = useAlert()
   
  const [counter , setCounter] = useState(0)
  const [show , setShow] = useState(false) ; 

   const [obj , setObj] = useState({
       id : id , 
       price : price , 
       image : image , 
       name : name , 
       review : Review , 
       type : type , 
       item_count : counter,
    })  
      
     
    const myfun=(value)=>{ 
      setCounter((prev)=>prev+value) 
         obj.item_count = counter+1 
         
      if(counter<=0){
        setCounter(1) ; 
        obj.item_count =  1
        
        } 
     } 

    return (
        
<div id = "container" className="card" >
    <div id = "img" className= "imgdiv">
    <img id = "img-top" src={image}  className="card-img-top" alt="image"/>
    </div>
  
  <div id = "c-body" className="card-body">
     <p className="card-text">{price}₹</p>
     <p className="card-title">{name}</p>
     <p className="card-title">{type}</p>
     <p style = {{fontWeight:"bolder" , color : "gray"}} className="card-text"> Price: ₹ {price} </p> 

    <div id = "link" className = "link">
      <div>
         <button className = "min" onClick={()=>myfun(-1)}>-</button><span style = {{ fontWeight : "bolder" ,  color : "red"}}>{counter}</span><button className = "max" onClick={()=>myfun(1)}>+</button>
      </div>

      <div>
      <button   className = "cardid-btn"
                    onClick={()=>{
              {show ? setShow(false) : setShow(true)}
            //handleChange({obj,counter,show})  
            axios.post("http://localhost:8080/Cart_item",obj)
            // .then(alert.success("item added to Cart"))
       .catch((error)=>{
               console.log(error) ; 
             })  
         }}> Add To Cart</button>
    </div>
    </div>
  </div>
</div>
  
    )
}
