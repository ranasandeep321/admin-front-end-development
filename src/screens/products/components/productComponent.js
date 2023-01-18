import React from 'react'

const ProductComponent = (props) => {
  return (
    <div className='m-4 h-max full border-2 rounded-lg flex p-2'>
        <div className='p-1 w-1/5 m-1 '>
        <img className='rounded-lg h-full w-full' src={props.productImg} alt="product"></img>
        </div>
        <div className='p-1 w-1/4 h-max m-1 pl-4 '>
        <h1 className='font-bold text-lg px-6'>Product Details</h1>
        <p>Product Name : {props.productName} </p>
        <p>Product Id : {props.productId}</p>
        <p>Vendor Name : {props.vendorName}</p>
        <p>Vendor Id : {props.vendorId}</p>
        <p>Status : {!props.status?"Pending":props.status}</p>
        </div>
        <div className='p-1 w-2/5 h-max m-1'>
        <p className='font-bold text-lg px-32 '>Short Description</p>
        <p>{props.productDescription}</p>
        </div>
        <div className='p-1 w-1/5 h-32 m-1 pl-5 '>
        <p className='font-bold text-lg px-20'>Price</p>
        <p>VendorPrice : &#8377; {props.vendorPrice}</p>
        <p>Discount : {props.vendorDiscount} %</p>
        <p className='font-bold'>Total Price :  &#8377; {props.vendorPrice - (props.vendorPrice* (props.vendorDiscount/100)) }</p>
        </div>
    </div>
  )
}

export default ProductComponent