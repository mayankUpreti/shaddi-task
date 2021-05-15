import React from 'react'
import Skeleton from 'react-loading-skeleton';
const SkeletonLoader=()=>{
    return(
        <div className='col-md-4 item-container m-2 p-2'>
                <div className='text-center mb-2'> <Skeleton circle={true} height={50} width={50}/></div>
                <Skeleton count={5}/> 
      </div>
    )
}

export default SkeletonLoader