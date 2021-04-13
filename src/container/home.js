import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from './Table';


const Home = () => {

    const [users, setUsers] = useState({ fetching:true , users:[] })
    

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                console.log(res);
                setUsers({ fetching:false,users: res.data })
            })
    },[])
    const onDeleteHandler =(index)=>{
        setUsers(u => {
            console.log(u);

            return {fetching: false,users : u.users.filter((e,i)=>( i !== index)
                    

            )}
        })
    

    }
    return (
        <div>
            <Table users = {users} delete={onDeleteHandler}/>
        </div>
    )
}


export default Home;
















// const isFirstRender = React.useRef(true);
    // React.useEffect(() => {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false;
    //         return;
    //     }

    //     showData();

    // });


    // const showData = () => {
    //     let tabledUsers = null;
    //     const data = { ...users }
    //     console.log()
    //     // data.map((item, index) => {
    //     //    return( tabledUsers = <tr key={index}>
    //     //         <td>{item.username}</td>
    //     //         <td>{item.password}</td>
    //     //         <td>{item.firstname}</td>
    //     //         <td>{item.lastname}</td>
    //     //     </tr>)

    //     // })
    // }
    // let hits=null;
    // if(fetchedUsers){
    //     hits = users.map((item, index) => {
    //         <tr key={index}>
    //             <td>{item.username}</td>
    //             <td>{item.password}</td>
    //             <td>{item.firstname}</td>
    //             <td>{item.lastname}</td>
    //         </tr>
    //     })
    // }