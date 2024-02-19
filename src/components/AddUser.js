import React from "react";

class AddUser extends React.Component {
  userAdd = {}
   constructor(props) {
     super(props)
     this.state = {
         first_name: "",
         last_sname: "",
         email: "",
         avatar: ""
     }
   } 
  render() {
  return (
    <form ref={(el) => this.myForm = el} className="add-edit-form">
      <input type="text" name="Имя" placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
      <input type="text" name="Фамилия" placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
      <input type="text" name="Аватар" placeholder="Ссылка на аватар" onChange={(e) => this.setState({avatar: e.target.value})}/>
      <input type="text" name="Почта" placeholder="Почта" onChange={(e) => this.setState({email: e.target.value})}/>
      <button type="button" onClick={() => {
        //Очищаем форму
        this.myForm.reset();
        ////////////////////
        this.userAdd = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          avatar: this.state.avatar,
          email: this.state.email
        }
        if(this.props.user){
          this.userAdd.id = this.props.user.id
        }
        this.props.onAdd(this.userAdd)
    }
      }>Добавить</button> 
    </form>
  )
  }
}

export default AddUser