import React,{useState ,useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import moment from "moment"
import Login from "./Login"
const Result = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {access_token} = useSelector(state=>state.Git)
  const [user, setUser] = useState({})
  const [repo , setRepo] = useState([])
 

 useEffect(()=>{


  const getUser = async () => {
  
    // dispatch({type:"createProductStart"})
    try{
        const res = await axios.get("https://api.github.com/user" 
        , {
           headers:{
               Authorization: `Bearer ${access_token}`
           },
        }
        );
       //  const {data} = res.data
        // dispatch({type:"CreateProductSuccess", payload:res.data.data})
       setUser(res.data)
        console.log(res)
        }
        catch(error){
            console.log(error)
            navigate('/auth')
          // dispatch({type:"CreateProductFailure"})
        }
        
    }
    getUser()

 },[])

 useEffect(()=>{
    const getRepo = async ()=>{
      try{
        const res = await axios.get(user?.repos_url)
        setRepo(res.data) 
      }
      catch(error){
        console.log(error)
      }
     
    }
    getRepo();
 },[user?.repos_url])
 



if(!access_token){
  return (<Login/>)
}

  return (
    <section className='main'>


      <div className="container">
        <div className='row'>

     <div className="col-lg-4 col-md-12">
<div className='column'>
  <img src={user?.avatar_url} alt='i' className='avatar'/>
  
  <h2 style={{fontWeight:'bold'}}>{user?.login}</h2>
  <h3>{user.name}</h3>
  <button className="button">Follow</button>
  <h4>trying to be better than yesterday</h4>
  <div className='follows'>
    <p>{user?.followers} followers</p>
    <p>{user?.following} following</p>
  </div>
  <p>{user.location}</p>
  <p>{user.email}</p>
  <p>{user?.twitter}</p>
</div>
     </div>
     <div className='col-lg-8 col-md-12'>
       
   <div className="column2">
     <ul className='list-group list-group-flush e-list'>
       {
         repo?.slice(0,20).map((item)=>(
          <li className="list-group-item" key={item?.id}>
          <div className='row'>
            <div className='col-md-8'>
              <h3 style={{color:'blue'}}>{item?.name}</h3>
              <h6>Forked : {item?.forks_count} </h6>
              <h5>{item.description}</h5>
              <p>{item?.language}</p>
              <p>{moment(item?.updated_at).startOf('day').fromNow()}</p>
            </div>
          </div>
        </li>
         ))
       }
      
      
     </ul>
   </div>


       
       </div> 

        </div>
      </div>
    </section>
  )
}

export default Result