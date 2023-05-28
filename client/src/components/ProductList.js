import React from 'react'
import ProductCard from './ProductCard.js'



function ProductList({products, currentCustomer, addToCart,checkInProduct}) {

    const productCardsArray = products.map(productObj => {
        // console.log(productObj)
        return <ProductCard key={productObj.id} product={productObj} currentCustomer={currentCustomer} addToCart={addToCart} checkInProduct={checkInProduct}
        />
    })

// console.log(currentCustomer)

    return (
        <div>
            <section className="mb-20">
                <div className="container mx-auto ">
                    <div>{productCardsArray}</div>
                </div>
            </section>
        </div>
    )
}


export default ProductList;