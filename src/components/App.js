import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";

class App extends Component {

  state = {
  hogs: []
};
  render() {
    return (
    <div className="App">
      <div className="Nav">
        <Nav hogs={this.state.hogs}/>
      </div>
      <div className="HogContainer">
        <HogList hogs={this.state.hogs}/>
      </div>

     </div>
    );
  }

  componentDidMount() {
     this.getHogs()
   }

 getHogs(){

   fetch('http://localhost:3001/hogs')
   .then(res => res.json())
   .then(data => {
        this.setState({hogs: data})

     })
}


 renderHog(hog){

  }
}
export default App;
