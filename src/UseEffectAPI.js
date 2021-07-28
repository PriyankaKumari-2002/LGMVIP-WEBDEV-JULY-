import React, {useState, useEffect } from 'react'
import Loading from './loading';
const UseEffectAPI = () =>{
    const [users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const getUsers = async() => {
        try{
            setLoading(false)
            const response= await fetch('https://api.github.com/users');
            
            setUsers(await response.json());
        }catch(error){
            console.log("my error is"+ error); //try {...}catch(object){...} it is used for error handling
        }
             
             


    } 
    useEffect(() => {
        getUsers();

    },[]);
    if(loading) {
        return <Loading/>
    }
    
    

    return (
        <>
            <div>
           <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {

                        users.map((curElem) => {
                        
                            const { avatar_url, id, login, events_url,followers_url,type } = curElem;
                        return (
                              <div className="col-10 col-md-5 mt-5" key={curElem.id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={ avatar_url } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{login} </h4>
                                            <h4 className="mb-0 mt-0 textLeft">Events Url:<br></br>{events_url} </h4>
                                            <br></br>
                                            <h4 className="mb-0 mt-0 textLeft">Followers URL:<br></br>{followers_url} </h4>
                                            
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles"> Repos</span> <span className="number1">26</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">  Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Following</span> <span className="number3">2890</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default UseEffectAPI 