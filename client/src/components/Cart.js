import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";


function Cart({addToCart, currentCustomer, myCartItems, checkInProduct}) {
  
 

    return (
        <div>
          <h1>hello Cart</h1>
          <ProductList 
          addToCart={addToCart} cart={true} currentCustomer={currentCustomer} products={myCartItems} checkInProduct={checkInProduct} />
          <div style={{'display': "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "20px"}}>
          <h2 style={{"color": "#111", "fontSize": "30px", "fontWeight": "bold", "letterSpacing": "-1px", "lineHeight": "1", "textAlign": "center"}}>Total Price: </h2><p style={{"padding": "10px", "fontSize": "20px"}}>$ 6248.99</p></div>
        </div>
  );
}
export default Cart;