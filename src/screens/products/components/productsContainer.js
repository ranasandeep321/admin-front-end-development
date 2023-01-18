import React from 'react'
import ProductComponent from "./productComponent.js"
import src1 from "../../../assets/productsImg/sampleImg.png"
const ProductsContainer = () => {
  const productdesc1="asdas dablsd aslbdasndalknsdcasd l scdlnskadnac;sd;acsnd vnba./v s/vfNJBKCKANF /C;FJ/ cfnkn fa/V NJVFM avm ajSDSA;LCKD ";
  const vendorDiscount=10;
  const vendorPrice=100;
  return (
    <>
        <div className='w-11/12 ml-16 mt-10 flex flex-col'>
            <ProductComponent productImg={src1} productName="sample" productId="12334" vendorName="sample Traders" vendorId="123123" status="delivered" productDescription={productdesc1} vendorPrice={vendorPrice} vendorDiscount={vendorDiscount}/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
        </div>
    </>
  )
}

export default ProductsContainer