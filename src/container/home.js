import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from './Table';


const Home = () => {

    const [users, setUsers] = useState({ fetching:true , users:[] })
    

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setUsers({ fetching:false,users: res.data })
            })
    },[])
    const onDeleteHandler =(index)=>{
        axios.delete("http://localhost:5000/delete",{data : {payload: index}})
            .then(res => {
                if(res.data.success){
                    setUsers(u => {       
                        return {fetching: false,users : u.users.filter((e,i)=>( i !== index)     
                        )}
                    })
                    alert("Deleted successfully!!")
                }
            }).catch(err=>{
                console.log(err)
            })
    }
    return (
        <div>
            <Table users = {users} delete={onDeleteHandler}/>
        </div>
    )
}


export default Home;
