import React from 'react';
import FormCode from './FormCode';

class App extends React.Component{
  submit = (values) => {
    alert("Submitted");
    console.log(values);
  }
  
  render(){
    return(
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <FormCode onSubmit={this.submit}/>
      </div>
    )
  }
}

export default App;