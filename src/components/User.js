import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from "axios";
import {Link} from 'react-router-dom';
class User extends Component {
    state ={
        isVisible: false
    }
  

  onClickEvent = (e) =>{
      this.setState({
          isVisible : !this.state.isVisible
      })
  }
  onDeleteUser = async (dispatch,e) => {
      const{id} = this.props;
      await axios.delete(`http://localhost:3004/users/$ {id}`);
     
      dispatch ({type: "DELETE_USER", payload:id});
  }
    render() {

        const {id,name,salary,department}=this.props;
        const {isVisible}=this.state;
        return (
            <div className="col-md-8 mb-4" >
                <div className="card"   style={isVisible ? {backgroundColor:"#62848d", color:"white"} : null}>
                    <div className="card-header d-flex justify-content-between ">
                       <h4 className="d-inline" onClick = {this.onClickEvent}> {name} </h4> 
                        <i onClick = {this.onDeleteUser} className="far fa-trash-alt"></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">

                        <p className="card-text">Departman: {department} <br/> </p>
                        <p className="card-text">Maaş: {salary} </p>
                        <Link to={`edit/${id}`} className="btn btn-dark btn-block"> Update User </Link>
                    </div>
                    : null
                    }
                    
                    
                    
                </div>
            </div>
        )
    }
}
User.defaultProps ={
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
}
User.propTypes ={
    name : PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,

}
export default User;