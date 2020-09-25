import Joi from "joi";
import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  })
  validate = () => {
    const result = this.schema.validate(this.state.account, {abortEarly:false})
    
    if(!result.error) return {}
    const errors = {}
    for(let item of result.error.details){
      errors[item.path[0]]= item.message
    }
    return errors
  };
  validateProperty = ({id,value})=>{
    if(id === "username"){
      if(value.trim()==="") return "Username is required"
    }
    if(id === "password"){
      if(value.trim()==="") return "Password is required"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    console.log("submitted");
  };
  handleChange = ({ target: input }) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.id] = errorMessage
    else delete errors[input.id]
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            type="text"
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            errors={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
