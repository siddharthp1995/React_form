import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
     super();
     this.state = {
         name: '',
         phone_number: '',
         people_number: '',
         mail_id: '',
         occassion: '',
         date: '',
     }
     this.updateState = this.updateState.bind(this);
     this.showDetailFilled = this.showDetailFilled.bind(this);
   };

   updateState(event) {
      var detailFilled = document.getElementById('DetailFilled');
      this.setState({
         [event.target.name]: event.target.value,
      });
      ReactDOM.findDOMNode(detailFilled).style.display = 'none';
   }

   showDetailFilled() {
      var detailFilled = document.getElementById('DetailFilled');
      var mySpan = document.getElementById('mySpan');
      ReactDOM.findDOMNode(mySpan).style.color = 'red';
      ReactDOM.findDOMNode(detailFilled).style.display = 'block';
   }
  
   render() {
      return (
         <div className = "wrapper">
            <div className= "subWrapper">
               <div className = "enquiryDiv">
                  <div>Enquiry Here</div>
               </div>
               <div className = "formDiv">
                  <div className = "leftFormDiv">
                     <div>
                        <input className = "input" type= "text" name = "name" value = {this.state.name} onChange = {this.updateState} placeholder="Name"/>
                     </div>
                     <div>
                        <input className = "input" type= "number" name = "phone_number" value = {this.state.phone_number} onChange = {this.updateState} placeholder="Phone Number"/>
                     </div>
                     <div>
                        <input className = "input" type= "text" name = "people_number" value = {this.state.people_number} onChange = {this.updateState} placeholder="Enter No. of people"/>
                     </div>
                  </div>
                  <div className = "rightFormDiv">
                     <div>
                        <input className = "input" type= "text" name = "mail_id" value = {this.state.mail_id} onChange = {this.updateState} placeholder="E-mail"/>
                     </div>
                     <div>
                        <input className = "input" type= "text" name = "occassion" value = {this.state.occassion} onChange = {this.updateState} placeholder="Select ocassion"/>
                     </div>
                     <div>
                        <input className = "input" type= "date" name = "date" value = {this.state.date} onChange = {this.updateState} placeholder="Select date"/>
                     </div>
                  </div>
               </div>
               <div className = "submitDiv">
                  <button className = "submitBtn" onClick = {this.showDetailFilled}><div>SUBMIT</div></button>
               </div>
            </div>
            <div className = "filledData" id = "DetailFilled">
               <div style = {{width: '90%'}}>
                  <div>Your Entered data is ...</div>
                  <div>Name: <span id = "mySpan">{this.state.name}</span></div>
                  <div>Phone Number: <span id = "mySpan">{this.state.phone_number}</span></div>
                  <div>Entered No. of people: <span id = "mySpan">{this.state.people_number}</span></div>
                  <div>E-mail: <span id = "mySpan">{this.state.mail_id}</span></div>
                  <div>Selected ocassion: <span id = "mySpan">{this.state.occassion}</span></div>
                  <div>Selected Date: <span id = "mySpan">{this.state.date}</span></div>
               </div>
            </div>
         </div>
      );
   }
}
export default App;
