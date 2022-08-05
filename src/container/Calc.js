import React, { Component } from 'react';
import { Button } from '../components/Button';
import { Equal } from '../components/Equal';
import { Output } from '../components/Output';

export default class Calc extends Component {
    constructor() {

    super();
    this.state={
           currentValue:0
    }
}
takeInput(event){
    let currentValue=event.target.value;
    console.log('Rec CurrentValue',currentValue);
    if(this.state.currentValue===0)
    {
        this.setState({currentValue: currentValue});
    }
    else{
        let concate=this.state.currentValue.toString()+currentValue;
        this.setState({currentValue: concate});
    }
}
computeIt(){
    let expression=this.state.currentValue;
    let result = eval(expression);
    this.setState({currentValue:result});
}
    render() {
        return (
            <div className="container" style={{width: "20%", marginTop:"100px" }}>
                <h1 className="alert-info text-center">Calculator</h1>
                <Output result={this.state.currentValue}/>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td><Button input={this.takeInput.bind(this)} value="7"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="8"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="9"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="/"/></td>
                        </tr>
                        <tr>
                            <td><Button input={this.takeInput.bind(this)} value="4"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="5"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="6"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="*"/></td>
                        </tr>
                        <tr>
                            <td><Button input={this.takeInput.bind(this)} value="1"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="2"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="3"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="-"/></td>
                        </tr>
                        <tr>
                            <td><Button input={this.takeInput.bind(this)} value="0"/></td>
                            <td><Button input={this.takeInput.bind(this)} value="."/></td>
                            <td><Equal computeit={this.computeIt.bind(this)} value="="/></td>
                            <td><Button input={this.takeInput.bind(this)} value="+"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
