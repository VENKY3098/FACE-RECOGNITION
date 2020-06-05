import React from 'react';
import axios from 'axios';

    class Signin extends React.Component{
      constructor(){
        super();
        this.state={
          signInEmail:'',
          signInPassword:''
        }
      }
      onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value})
      }
      onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value})
      }
      onSubmitSignIn = () => {
        axios.post('http://localhost:3000/signin', {
          email: this.state.signInEmail,
          password: this.state.signInPassword
        }).then(res => {
          if (res?.data.id) {
            console.log(res.data);
            this.props.loadUser(res.data);
            this.props.onRouteChange('home');
          }
        })
      // onSubmitSignIn = () => {
      //   fetch('http://localhost:3000/signin1', {
      //     method: 'post',
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify({
      //       email: this.state.signInEmail,
      //       password: this.state.signInPassword
      //     })
      //   }).then((response)=>response.json())
      //   .then(data => {
      //       if (data==='notok') {
      //         //this.props.loadUser(user)
      //         this.props.onRouteChange('signin');
    
      //         console.log('unsuccessful');
      //       }
      //       else if(data==='ok') {
              
      //         console.log('successful');
      //         this.props.onRouteChange('home');
      //       }
      //       this.props.onRouteChange('home');
      //       })
        
      }
    render(){
      const{onRouteChange}=this.props;
    return( 
    <article className="br4 ba br-pill dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center"> 
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 bold underline gold">Sign In</legend>
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
            onClick={this.onSubmitSignIn} 
            className="b ph3 pv2 input-reset ba gold br-pill b--black bg-transparent grow pointer f6 dib" 
            type="button" 
            value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>onRouteChange('signup')} className="f6 link dim underline gold pointer black db">Sign up</p>
          </div>
        </form>
        </main>
    </article> 
    );
    }
}
export default Signin;