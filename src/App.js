import React,{Component} from 'react';
import './App.css';
import Nav from './components/Navbar';
import Map from './components/Map';

class App extends Component {
  state= {
    location:'',
    address:'',
    comments:'',
    mapdata:'',
    tab:'',
    rating:0
  }

    
    toggleTab=(data)=>{
              let setTab=data
              this.setState({tab:setTab})
          }
    handleInput=(data,val)=>{
      console.log("hit"+data)
      this.setState({
        [data]: val
      });
    }
    
    
  
  render(){
    return (
      <div className="App">
        <Nav onChange={this.handleInput} {...this.state}/>
          <Map/>
         {/* <AddLoc/>
         <LocInfo/>  */}
      </div>
    );
  }
}

export default App;
