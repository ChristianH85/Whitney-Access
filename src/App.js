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
    rating:0,
    pending:[]
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
    SubmitNew=()=>{
      let plist=this.state.pending
      let loc=this.state.location
      let add= this.state.address
      let comm= this.state.comments
      let rate= this.state.rating
      let verifying={
        pLoc:loc,
        pAdd:add,
        pComm:comm,
        prate:rate
      }
      plist.push(verifying)
      this.setState({pending:plist})
      console.log("root")
    }
    
  
  render(){
    return (
      <div className="App">
        <Nav onChange={this.handleInput} catchPass={this.SubmitNew}{...this.state}/>
          <Map {...this.state}/>
         {/* <AddLoc/>
         <LocInfo/>  */}
      </div>
    );
  }
}

export default App;
