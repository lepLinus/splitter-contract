import React from "react";
import {Component} from "react/cjs/react.production.min.js";

class Deploy extends Component{
    constructor(){
        super();
        this.state = {status:"",addressArray: [],sharesArray: [],walletAddress: "",orga: "",payees: new Map(),tmpadress:"",tmpshares:""};;
    }
    
    addPayee(){
        let map = this.state.payees;
        map.set(this.state.tmpshares,this.state.tmpadress);
        this.setState({payees: map});
    }
    updatePayeeAddress(e){
        this.setState({tmpadress: e});
    }
    updatePayeeShares(e){
        this.setState({tmpshares: e});
    }
    render(){
        let test =[];
        this.state.payees.forEach((address,shares) =>{
            console.log(address);
            test.push(<> <tr><th><b>Payee: </b> {address}</th> <th><b>Shares: </b>{shares}</th> </tr></>)})
        return(
            <>
            <h2 style={{ paddingTop: "0px" }}>Deploy Splitter Contract:</h2>
            <div>
            <table id="organisationtable">
            {test}
            </table> 
                <h3>Add Payee</h3>
                <input
                type="text"
                placeholder="Address"
                onChange={(e) => this.updatePayeeAddress(e.target.value)}
                value={this.state.tmpadress}
                />
                <input
                type="number"
                placeholder="Shares"
                onChange={(e) => this.updatePayeeShares(e.target.value)}
                value={this.state.tmpshares}
                />   
            </div>
            <div>
                <button id="publish" onClick={(e) => this.addPayee()} >
                Add Payee
                </button>

                <button id="publish" onClick={(e) => this.addPayee()} >
                Deploy
                </button>
            </div>
            </>
        );
    }
}
export default Deploy;