import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Facerecog from './components/facerecog/facerecog';
import ImageLink from './components/imagelink/imagelink';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'b6d7d2c76e564ca19398b6dec42bcd5f'
 });
const paramopt={
  particles: {
      number:{
        value:80,
        density:{
          enable: true,
          value_area: 1000,
        }
      }
    }
  };

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
      box:{},
      route:'signin',
      isSignedIn:false,
      user:{
        id:'',
        name: '',
        email: '',
        entries:0,
        joined:''
      }

    }
    this.onRouteChange=this.onRouteChange.bind(this);
  }
  loadUser=(user)=>{
    this.setState({user:{
      id:user.id,
      name:user.name,
      email:user.email,
      entries:user.entries,
      joined:user.joined
    }})
  }

  calFaceLOC=(data)=>{
    const faceloc=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width= image.width;
    const height= image.height;
    return{
      leftCol: faceloc.left_col*width,
      topRow: faceloc.top_row*height,
      rightCol: width -(faceloc.right_col*width),
      bottomRow: height-(faceloc.bottom_row*height)
    }
  }
  displayFaceBox=(box)=>{
   // console.log(box);
    this.setState({box:box});
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  onButtonSubmit=()=>{
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input )
    .then(response => {
      if(response){
        fetch('http://localhost:3000/image',{
               method:'put',
               headers:{'Content-Type':'application/json'},
               body: JSON.stringify({
                 id:this.state.user.id
               })
              }
        ).then(response=>response.json())
        .then(count=>{
         this.setState(Object.assign(this.state.user,{entries:count}))
        })
      }
      this.displayFaceBox(this.calFaceLOC(response))
    })
    .catch(err => console.log(err));
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  // onRouteChange=(route)=>{
  //   if(route==='home')
  //   {
  //     this.setState({isSignedIn:true})
  //   }
  //   else 
  //   {
  //     this.setState({isSignedIn:false})
  //   }
  //   this.setState({route: route})
  // }
  render(){
  return(
    <div className="App">
      <Particles className='particles' 
                params={paramopt} />
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route==='home' 
        ? <div> 
        <Logo/>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Facerecog box={this.state.box} imageURL={this.state.imageURL}/>
        </div>
        :
        (
          this.state.route==='signup'
          ? <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
      }
    </div>
  );
}
}
export default App;
