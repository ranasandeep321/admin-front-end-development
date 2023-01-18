import React from 'react';
import UserContainer from './UserContainer';

const Users = () => {
    return (
        <>
        <div className='w-full mt-10'>
            <div className='flex w-full'>
            <div className='ml-16 text-4xl font-bold'>
            Users
            </div>
            
            </div>
            <div>
          <UserContainer></UserContainer>
            </div>
        </div>
       
    </>
    );
};

export default Users;