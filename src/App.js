import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import Rank from "./components/rank/rank";
import ImageLinkForm from "./components/imagelink/imagelinkform";
import FaceRecognition from './components/facerecognition/facerecognition'
import Signin from "./components/signin/signin";
import Register from "./components/register/register"
import "tachyons";
import Particles from 'react-particles-js';
import "./App.css";


const particleParams = {
  "particles": {
    "number": {
        "value": 250,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 3,
        "random": true,
        "anim": {
            "speed": 4,
            "size_min": 0.3
        }
    },
    "line_linked": {
        "enable": false
    },
    "move": {
        "random": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
        },
        "repulse": {
            "distance": 400,
            "duration": 4
        }
    }
}
}

const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        }})
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/')
    //     .then(response => response.json())
    //     .then(console.log)
    // }

    calculateFaceLocation =(data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputimage')
        const width = Number(image.width)
        const height = Number(image.height)
        // console.log(width, height)
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
                }
    }

    displayFaceBox = (box) => {
        console.log(box)
        this.setState({box: box})
    }

    handleInputChange = (event) => {
        // console.log(event.target.value)
        this.setState({input : event.target.value})
    }

    handleClick = () => {
        this.setState({imageUrl: this.state.input})
        // console.log('Click')
        fetch('https://agile-garden-87732.herokuapp.com/imageurl' , {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            input: this.state.input
            })
        }).then(response => response.json())
            .then(response => {
                if(response) {
                    fetch('https://agile-garden-87732.herokuapp.com/image' , {
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                        id: this.state.user.id
                        })
                    })
                    .then(response => response.json())
                    .then(count => {
                        this.setState(Object.assign(this.state.user, { entries: count}))
                    })
                   .catch(console.log) 
                }        
                this.displayFaceBox(this.calculateFaceLocation(response))
        })    //first get face location then tak to box object
                     //   console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        .catch(err => console.log(err))
    }

    onRouteChange = (route) => {
       if (route === 'signout') {
           this.setState(initialState)
       } else if (route === 'home') {
           this.setState({isSignedIn: true})
       }
       this.setState({route: route}); 
    }

    render() { 
        const { isSignedIn, imageUrl, route, box} = this.state;
        return ( 
        <div className="App">  
            <Particles className='particles' params ={particleParams}/>   
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            { route === 'home'
                ? <div>
                    <Logo />
                    <Rank name={this.state.user.name} entries={this.state.user.entries} />
                    <ImageLinkForm 
                        handleInputChange={this.handleInputChange} 
                        handleClick={this.handleClick}/>
                    <FaceRecognition 
                        imageURL={imageUrl} 
                        box={box}/>
                    </div>
                
                : (
                    route === 'signin'
                    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            }
        </div>
         );
    }
}
 

export default App;
