import React from "react"
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }
  render() {
    //Для доступа к объекту используем деструктуризацию
    const { user } = this.props;
    ///////////////////////////////////////////////////
    return (
      <div className="user">
        <IoCloseCircleSharp onClick={() => this.props.onDelete(user.id)} className="delete-icon" />
        <IoHammerSharp onClick={() => this.setState({editForm: !this.state.editForm})} className="edit-icon" />
        <h3>{user.firstname} {user.lastname}</h3> 
        <p>{user.bio}</p>
        <b>{user.isHappy ? "Счастлив :)" : "Не счастлив :("}</b>
        {this.state.editForm && <AddUser user={user} onAdd={this.props.onEdit} /> }
      </div>
    )
  }
}

export default User
