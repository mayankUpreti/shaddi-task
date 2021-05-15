import React, { useEffect,useState,useRef } from 'react'
import {fetchData} from '../../services/apicalls'
import { useHistory } from 'react-router'
import LastElementHook from '../../useHooks/lastElementHooks'
import SkeletonLoader from '../../components/Skeleton/Skeleton'


const Home=()=>{
   const [data,setData]=useState([])
   const [isfetched,setIsfetched]=useState(false);
   const observer = useRef();
   const [page,setPage]=useState(0)
   const history=useHistory();

   //incrementing each page--------------
   const setDataPage=()=>{
       setPage(prev=>prev+1)
   }

    useEffect(()=>{
        const fetchMovies=async()=>{
            const params={
                _limit:20,
                _start:page
            }
            const response=await fetchData(params);
            if(response && response.data){
                //setting up new data---
                 setData(prev=>[...prev,...response.data])
            }
            setIsfetched(true)
        }
        fetchMovies()

    },[page])

    const lastelement = LastElementHook(
         isfetched,
         true, //here we have to send whether data can be loaded 
        //  we can do by checking with total data from api and current data(by default true
        //  as total_data field is not available)
        setDataPage,
        observer,
      );

      //handle logout------------------
    const handleLogout=()=>{
        localStorage.clear();
        history.push('/login')
    }

    return(
        <div className='p-30 w-100'>
         <button className='btn btn-primary my-2 d-block' style={{marginLeft:'auto'}} onClick={handleLogout}>Logout</button>
          <div className='row main-body box-shadow d-flex flex-wrap justify-content-around align-items-center'>
            {
             isfetched ? data ? data.map((el,i)=>{
                   return(
                            <div className='col-md-4 item-container m-2 p-2' key={i} ref={(i+1==data.length)?lastelement:null}>
                              <div className='text-center mb-2'><img src={el.thumbnailUrl}/></div>
                              <div className='text-capitalize font-weight-bold text-center text-truncate '>{el.title}</div>
                            </div>
                           )
                  })
                :<div className='align-center font-weight-bold text-center h2'>
                    No Data Found!!!
                </div>
                :
                Array.from({length:10}).map((el,i)=>
                <SkeletonLoader key={i}/>
                )
             }   
          </div>
        </div>
        )
}
export default Home