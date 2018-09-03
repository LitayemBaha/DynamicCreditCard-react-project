import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import InputCard from './inputCard';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Number:"",
      Name:"",
      ValidThru:"",
      InputNumber:"",
    }
  }

  /*************************************************** */
  InputCardNumber=(event)=> {
    const val =event.target.value
     if(event.target.value.length <=16 && ! isNaN(+val) ){
      this.setState({
        Number:val
      })
      this.setState({
        InputNumber:val
      })
     }
    else
     {event.target.value=this.state.Number}
     }
    
  /****************************************************/
  InputCardName=(event)=> {
    if (isNaN(event.target.value)) {
        if(event.target.value.length <=20 ) {
    
         this.setState({
         Name:event.target.value.toUpperCase()
        }) 
      }
  }
  else
      {event.target.value=this.state.Name}
 }
   /************************************************** */
   InputCardValidThru=(event)=> {
    if(event.target.value.length <=4 ) {
    this.setState({
      ValidThru:event.target.value
    })
    }
    else
    {event.target.value=this.state.ValidThru}
   }
   /**************************************************** */
   Deletecard=()=>{
    this.setState({
      Number:""
    })
    this.setState({
      Name:""
    })
    this.setState({
      ValidThru:""
    })
   }
   /*************************************************** */
  render(props) {
    return (<div className="body">
      <Card 
         cardNumber={this.state.Number.padEnd(16,'*').split('').map((x,i)=>{   
                return i %4 ===0 ? " "+x:x
         })}
         cardName= {this.state.Name}
         cardValidThru={this.state.ValidThru.split('').map((x,i)=>{   
          return i ===2 ? "/"+x : x
         })}
         />
      <InputCard 
         InputNumber={this.InputCardNumber}
         InputName={this.InputCardName}
         InputValidThru={this.InputCardValidThru}
         delete={this.Deletecard}/>
      </div>
    );
  }

  }
export default App;
