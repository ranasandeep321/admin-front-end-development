import React from 'react'
import UserComponent from './UserComponent';
const UserContainer = () => {
  const productdesc1="asdas dablsd aslbdasndalknsdcasd l scdlnskadnac;sd;acsnd vnba./v s/vfNJBKCKANF /C;FJ/ cfnkn fa/V NJVFM avm ajSDSA;LCKD ";
  const vendorDiscount=10;
  const vendorPrice=100;
  return (
    <>
        <div className='w-11/12 ml-16 mt-10 flex flex-col'>
            <UserComponent productName="sample" productId="12334" vendorName="sample Traders" vendorId="123123" status="delivered" productDescription={productdesc1} vendorPrice={vendorPrice} vendorDiscount={vendorDiscount}/>
           <UserComponent></UserComponent>
           <UserComponent></UserComponent>
           <UserComponent></UserComponent>
           <UserComponent></UserComponent>
           <UserComponent></UserComponent>
           <UserComponent></UserComponent>
        </div>
    </>
  )
}

export default UserContainer;