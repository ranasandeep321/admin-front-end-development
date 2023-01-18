import React from 'react'

const UserComponent = (props) => {
  return (
    <div className='m-4 h-max full border-2 rounded-lg flex p-2'>
      <div className='p-1 w-1/5 m-1 '>
        <img className='rounded-lg h-full w-full' src={props.userImg} alt="user"></img>
      </div>
      <div className='p-1 w-1/4 h-max m-1 pl-4 '>
        <h1 className='font-bold text-lg px-6'>Name</h1>
        <p>User Name : </p>
        <p>Address :</p>


      </div>
      <div className='p-1 w-2/5 h-max m-1'>
        <p className='font-bold text-lg px-32 '> Description</p>

      </div>
      <div className='p-1 w-1/5 h-32 m-1 pl-5 '>
        <p className='font-bold text-lg px-20'>Status</p>
        <p>Status : {!props.status ? "Pending" : props.status}</p>
      </div>
    </div>
  )
}

export default UserComponent;