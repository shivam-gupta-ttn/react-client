import React, { useEffect } from 'react'

const Table = props => {

    useEffect(()=>{
        console.log("this",props.users)
    })


    return (
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>password</th>
            <th>firstname</th>
            <th>lastname</th>
          </tr>
        </thead>
        <tbody>
            {/* { for(i =0; i<props.users.length)} */}

          { (!props.fetching) && (props.users.users.length > 0) ? props.users.users.map( (user, index) => {
             return (
              <tr key={ index }>
                <td>{ user.username }</td>
                <td>{ user.password }</td>
                <td>{ user.firstname}</td>
                <td>{ user.lastname }</td>
                <td><button onClick={()=>props.delete(index)}>X</button></td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }
  export default Table;