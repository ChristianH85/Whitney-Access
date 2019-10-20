import React,{Component} from 'react';
import './App.css';
import Nav from './components/Navbar';
import Map from './components/Map';
import Login from './components/Login';


class App extends Component {
  state= {
    isLoggedIn: false,
    user:{},
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
    userLogin=(data,user)=>{
      if (data===false){
        
        this.setState({
          isLoggedIn: true,
          user:user
        })
      }
      console.log(this.state)
     
    }
  
  render(){
    return (
      <div className="App">
        <Nav onChange={this.handleInput} catchPass={this.SubmitNew}{...this.state}/>
  {this.state.isLoggedIn===true?<Map {...this.state}/>:<Login {...this.state} toggleLogin={this.userLogin}/>}
          {/* <Map {...this.state}/> */}
         {/* <AddLoc/>
         <LocInfo/>  */}
      </div>
    );
  }
}

export default App;
