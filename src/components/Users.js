
import React, { Component } from 'react';
import User from './User';
import UserCostumer from "../context";
 class Users extends Component { 
    render() {
        
       return(
        <UserCostumer>
               {
                   value=> {
                       const {users}=value;
                       return (
                        <div>
                            {
                                users.map(user =>{
                                    return(
                                        <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            salary={user.salary}
                                            department={user.department}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
            

                   }
               }
           </UserCostumer> 
       )
       
    }
}
export default Users;