import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Users = () => {
    const [data,setData] = useState({
        username: '',
        password:'',
        firstname:'',
        lastname:''


})
        useEffect(()=>{
            console.log(data)
        },[data])

    const onChangeHandler = (e,event)=>{
        setData({...data,[event]:e.target.value})
    }
    return(
        <div>
            <form onSubmit={(e)=>login(e,data)}>
                <label for="username">username</label>
                <input type="text" id="username" onChange={(e)=>onChangeHandler(e,"username")}/>

                <label for="username">password</label>
                <input type="password" id="pswrd" onChange={(e)=>onChangeHandler(e,"password")}/>

                <label for="username">firstname</label>
                <input type="text" id="firstname" onChange={(e)=>onChangeHandler(e,"firstname")}/>

                <label for="username">lastname</label>
                <input type="text" id="lastname" onChange={(e)=>onChangeHandler(e,"lastname")}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

function login(e,data){
    e.preventDefault();

    console.log(data);
    axios.post("http://localhost:5000/login", data)
        .then(res =>{
            alert(res.data.mesaage);
        })
        .catch(err =>{
            console.log(err);
        })
}
export default Users;