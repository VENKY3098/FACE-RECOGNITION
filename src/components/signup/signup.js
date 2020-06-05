import React from 'react';
import axios from 'axios';

    class signup extends React.Component{
      constructor(){
        super();
        this.state={
          email:'',
          password:'',
          name:''
        }
      }
      onNameChange=(event)=>{
        this.setState({name:event.target.value})
      }
      onEmailChange=(event)=>{
        this.setState({email:event.target.value})
      }
      onPasswordChange=(event)=>{
        this.setState({password:event.target.value})
      }
      onSubmitSignUp = () => {
        axios.post('http://localhost:3000/signup', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }).then(res => {
          if (res?.data!=='invalid entry') {
            console.log(res.data);
            this.props.loadUser(res.data);
            this.props.onRouteChange('signin');
          }
        })
      }
      // onSubmitSignUp=()=>{
      //    fetch('http://localhost:3000/signup',{
      //      method:'post',
      //      headers:{'Content-Type':'application/json'},
      //      body: JSON.stringify({
      //        email:this.state.email,
      //        password:this.state.password,
      //        name:this.state.name
      //      })
      //    }).then((response)=>{response.json()})
      //    .then(user=>{
      //      if(user!=='invalid user')
      //         {
      //           //this.props.loadUser(user);
      //           console.log('success signup');
      //           this.props.onRouteChange('signin');          
      //         }
      //       else{
      //         console.log('invalid input');
      //         this.props.onRouteChange('signup');
      //       }
      //       }
      //    )
         
      //  }
      render(){
        
    return( 
    <article className="br4 ba br-pill dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center"> 
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 bold underline gold">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy gold f5" htmlFor="name">Name</label>
              <input onChange={this.onNameChange}
              className="pa2 input-reset ba bg-transparent shadow-1 br-pill hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy gold f5" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange}
              className="pa2 input-reset ba bg-transparent shadow-1 br-pill hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy gold f5" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange}
              className="b pa2 input-reset ba bg-transparent shadow-1 br-pill hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input
            onClick={this.onSubmitSignUp} 
            className="b ph3 pv2 input-reset ba gold br-pill b--black bg-transparent grow pointer f6 dib" 
            type="button" 
            value="Sign Up"/>
          </div>
        </form>
        </main>
    </article> 
    );
      }
}
export default signup;