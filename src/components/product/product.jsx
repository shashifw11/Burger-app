import React from 'react'
import {useEffect , useState} from "react" ; 
import axios from "axios" ; 
import "./product.css"
import Cards from '../card/card';

const Product = () => {

    const [data , setData] = useState([]) ; 

    useEffect(()=>{
      getData() ; 
    },[]);
  

   const getData = async()=>{ 

    try{
      const res = await axios.get(`http://localhost:8080/data`)
        setData(res.data) 
     }catch(err){
       console.log(err);
    }
  }

  return (
    <div className = "container">
     {data.map((item,i)=>{
       return <Cards key = {i}  id = {item.id} name = {item.name} type = {item.type} img = {item.image_url} price = {item.price} review = {item.Review}/>
     })}
    </div>
  )
}

export default Product
