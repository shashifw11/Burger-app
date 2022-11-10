import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
import {Link} from "react-router-dom" ; 
import { CardID } from './cardId';

// import Spinner from 'react-bootstrap/Spinner'
 
const ProductId = () => {
  const {id} = useParams() ; 
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false) ;  
    console.log(data) ; 

  useEffect(()=>{
        getData() ; 
  },[]) ;  

   const getData = async ()=>{
    setLoading(true)
     try{
      const res = await axios.get(`http://localhost:8080/data/${id}`)
          setData(res.data) ; 
     }catch(err){
       console.log(err)
     } 
      setLoading(false)
    }
  return loading ? ( "Loading..."): (
    <div>  
      <CardID id = {data.id} price={data.price} Review={data.Review} image = {data.image_url} name={data.name} type = {data.type}/>
    </div>
  )
}

export default ProductId 

