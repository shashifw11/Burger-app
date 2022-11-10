import { useContext, useState, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartCard from "./cartcard"
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"


export const Cart = () => {

  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState()
  const [total, setTotal] = useState(0); 
  const [show , setShow] = useState(false) ;  
          
 useEffect(() => {
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].price * cart[i].item_count
      setTotal(sum.toFixed(2)); 
        if(i==0){
          setNum(i)
         }else {
          setNum(i + 1)
      }
    }
  }, [cart])

useEffect(() => {
    postItem();
  }, [])

  const postItem = async() => {
    setLoading(true)
    try{
      const res = await axios.get("http://localhost:8080/Cart_item") 
            setCart(res.data) ; 
         console.log(res) ; 
       }catch(err){
           console.log(err)
    }
    setLoading(false)
  }

  const deleteChange = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/Cart_item/${id}`)
      .then(postItem())
      // .then(CartChange(show?false:true)) ; 
    } catch (err) {
      console.log(err)
    }
  }

  return loading ? (<Spinner animation="border" />) : (
    <>
    <div style={{float : "right"  , marginRight : "20px"}}>
          <button style={{border : "none" , width: "250px", padding: "7px", background: "#1a5d9b", color: "white" }}>
            Cart Item : {num}</button>
        </div>

      <div>
        

        <Scrollbars style={{marginLeft: "30%", maxWidth: "600px", height: "500px" }}>

          {cart.map((e, i) => {
            return <div style={{ marginTop: "10px " }} key={i}>
               <CartCard id={e.id} deleteChange = {deleteChange} count = {e.item_count} image = {e.image} name = {e.name} price={e.price} type = {e.type}/>
            </div>
          })}
        </Scrollbars>

        <div style={{float: "right", maxWidth: "650px" }}>
          <Button style = {{ marginTop : "10px", padding :  "5px" , width : "250px" , marginLeft : "50px"}} variant="danger">Total : $ {total}</Button>
          <Link to = ""><Button style = {{ marginTop : "10px", width : "250px" , marginLeft : "20px"}} variant="primary" size="lg" active>
    Proceed To Checkout
  </Button></Link>
        </div>
       </div>
     </>
  )
}
