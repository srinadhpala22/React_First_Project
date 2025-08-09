import { Component } from "react";
import "./index.css";

class Home extends Component{
     state={ isLoggedin:false};
     
     onClickLogin=()=>{
         this.setState((prevState)=>({
              isLoggedin: !prevState.isLoggedin
         }));
     }

     render(){
        const {isLoggedin}= this.state;
        return (
            <div className="bg-container">
                <div className="card">
                     {isLoggedin? <>
                        <h1>Happy to see you</h1>
                        <button onClick={this.onClickLogin}>Logout</button>
                     </>:<>
                        <h1>Hello User</h1>
                        <button onClick={this.onClickLogin}>Login</button>
                     </>}
                </div>
            </div>
        )
     }
}
export default Home;