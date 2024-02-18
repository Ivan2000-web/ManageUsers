import React from "react";

class AddUser extends React.Component {
  userAdd = {}
   constructor(props) {
     super(props)
     this.state = {
         firstname: "",
         lastname: "",
         bio: "",
         age: 1,
         isHappy: false
     }
   } 
  render() {
  return (
    <form ref={(el) => this.myForm = el}>
      <input type="text" name="Имя" placeholder="Имя" onChange={(e) => this.setState({firstname: e.target.value})}/>
      <input type="text" name="Фамилия" placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
      <textarea name="Биография" placeholder="О себе" onChange={(e) => this.setState({bio: e.target.value})}/>
      <input type="number" name="Возраст" placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
      <label htmlFor="isHappy">Счастлив?</label> 
      <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
      <button type="button" onClick={() => {
        //Очищаем форму
        this.myForm.reset();
        ////////////////////
        this.userAdd = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          bio: this.state.bio,
          age: this.state.age,
          isHappy: this.state.isHappy
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